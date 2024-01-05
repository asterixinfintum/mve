import express from 'express';

import authenticateToken from '../../utils/authenticateToken';
import ItemEditor from '../utils/itemeditor';

import Loan from '../../models/loan';
import InvestmentPlan from '../../models/investmentplan';
import SavingsPlan from '../../models/savingsplan';
import Notification from '../../models/notification';
import Message from '../../models/message';

import { getIO, initSocketIO }from '../../socket';

const item = express();

item.post('/item/createloan', authenticateToken, async (req, res) => {
    if (!req.user || !req.user._id) {
        return res.status(401).send({ error: 'Unauthorized' });
    }

    try {
        const success = await Loan.createloanitem(req.body);
        res.status(200).send({ success });
    } catch (error) {
        console.error('Error creating loan item:', error);
        res.status(500).send({ error: 'Internal Server Error' });
    }
});

item.get('/item/loans', authenticateToken, async (req, res) => {
    if (!req.user || !req.user._id) {
        return res.status(401).send({ error: 'Unauthorized' });
    }

    try {
        const success = await Loan.getloans();
        res.status(200).send({ success });
    } catch (error) {
        console.error('Error retrieving loans:', error);
        res.status(500).send({ error: 'Internal Server Error' });
    }
});

item.get('/item/investments', authenticateToken, async (req, res) => {
    if (!req.user || !req.user._id) {
        return res.status(401).send({ error: 'Unauthorized' });
    }

    try {
        const success = await InvestmentPlan.getinvestmentplans();
        res.status(200).send({ success });
    } catch (error) {
        console.error('Error retrieving investment plans:', error);
        res.status(500).send({ error: 'Internal Server Error' });
    }
});

item.post('/item/createinvestmentplan', authenticateToken, async (req, res) => {
    if (!req.user || !req.user._id) {
        return res.status(401).send({ error: 'Unauthorized' });
    }

    try {
        const success = await InvestmentPlan.createinvestmentplan(req.body);
        res.status(200).send({ success });
    } catch (error) {
        console.error('Error creating investment plan:', error);
        res.status(500).send({ error: 'Internal Server Error' });
    }
});

item.post('/item/createsavingsplanitem', authenticateToken, async (req, res) => {
    if (!req.user || !req.user._id) {
        return res.status(401).send({ error: 'Unauthorized' });
    }

    try {
        const success = await SavingsPlan.createsavingsitem(req.body);
        res.status(200).send({ success });
    } catch (error) {
        console.error('Error creating savings plan item:', error);
        res.status(500).send({ error: 'Internal Server Error' });
    }
});

item.get('/item/savingsplans', authenticateToken, async (req, res) => {
    if (!req.user || !req.user._id) {
        return res.status(401).send({ error: 'Unauthorized' });
    }

    try {
        const success = await SavingsPlan.getsavingsitems();
        res.status(200).send({ success });
    } catch (error) {
        console.error('Error getting savings plans:', error);
        res.status(500).send({ error: 'Internal Server Error' });
    }
});

item.post('/item/createnotification', authenticateToken, async (req, res) => {
    if (!req.user || !req.user._id) {
        return res.status(401).send({ error: 'Unauthorized' });
    }

    try {
        const success = await Notification.createnotification(req.body);

        //console.log(success);

        getIO().emit('notification', { userid: success.content.user});

        res.status(200).send({ success });
    } catch (error) {
        console.error('Error creating notification:', error);
        res.status(500).send({ error: 'Internal Server Error' });
    }
});

item.post('/item/createmessage', authenticateToken, async (req, res) => {
    if (!req.user || !req.user._id) {
        return res.status(401).send({ error: 'Unauthorized' });
    }

    try {
        const success = await Message.addadminmessage(req.body);
        res.status(200).send({ success });
    } catch (error) {
        console.error('Error creating message:', error);
        res.status(500).send({ error: 'Internal Server Error' });
    }
});

item.put('/item/update', authenticateToken, (req, res) => {
    if (req.user && req.user._id) {
        const { id, type } = req.query;
        if (type === 'loan') {
            ItemEditor.updateLoan(id, req.body)
                .then(success => {
                    res.status(200).send({ success })
                })
                .catch(error => {
                    res.status(405).send({ error })
                })
        }

        if (type === 'investmentplan') {
            ItemEditor.updateInvestmentplan(id, req.body)
                .then(success => {
                    res.status(200).send({ success })
                })
                .catch(error => {
                    res.status(405).send({ error })
                })
        }

        if (type === 'savingsplan') {
            ItemEditor.updateSavingsplan(id, req.body)
                .then(success => {
                    res.status(200).send({ success })
                })
                .catch(error => {
                    res.status(405).send({ error })
                })
        }

        if (type === 'notification') {
            ItemEditor.updateNotification(id, req.body)
                .then(success => {
                    res.status(200).send({ success })
                })
                .catch(error => {
                    res.status(405).send({ error })
                })
        }

        return;
    }

    res.status(405).send({ error: 'not alowed' })
});

item.delete('/item/delete', authenticateToken, (req, res) => {
    if (req.user && req.user._id) {

        const { type, id } = req.query;

        if (type === 'loan') {
            ItemEditor.deleteLoan(id)
                .then(success => {
                    res.status(200).send({ success })
                })
                .catch(error => {
                    res.status(405).send({ error })
                })
        }

        if (type === 'investmentplan') {
            ItemEditor.deleteInvestmentPlan(id)
                .then(success => {
                    res.status(200).send({ success })
                })
                .catch(error => {
                    res.status(405).send({ error })
                })
        }

        if (type === 'savingsplan') {
            ItemEditor.deleteSavingsPlan(id)
                .then(success => {
                    res.status(200).send({ success })
                })
                .catch(error => {
                    res.status(405).send({ error })
                })
        }

        if (type === 'notification') {
            ItemEditor.deleteNotification(id)
                .then(success => {
                    res.status(200).send({ success })
                })
                .catch(error => {
                    res.status(405).send({ error })
                })
        }

        return;
    }

    res.status(405).send({ error: 'not alowed' })
});

export default item