import express from 'express';

import authenticateToken from '../../utils/authenticateToken';
import ItemEditor from '../utils/itemeditor';

import Loan from '../../models/loan';
import InvestmentPlan from '../../models/investmentplan';
import SavingsPlan from '../../models/savingsplan';

const item = express();

item.post('/item/createloan', authenticateToken, (req, res) => {
    if (req.user && req.user._id) {

        Loan.createloanitem(req.body)
            .then(success => {
                res.status(200).send({ success })
            })
            .catch(error => {
                res.status(405).send({ error })
            });

        return;
    }

    res.status(405).send({ error: 'not alowed' });
});

item.get('/item/loans', authenticateToken, (req, res) => {
    if (req.user && req.user._id) {

        Loan.getloans()
            .then(success => {
                res.status(200).send({ success })
            })
            .catch(error => {
                res.status(405).send({ error })
            });

        return;
    }

    res.status(405).send({ error: 'not alowed' });
});

item.get('/item/investments', authenticateToken, (req, res) => {
    if (req.user && req.user._id) {

        InvestmentPlan.getinvestmentplans()
            .then(success => {
                res.status(200).send({ success })
            })
            .catch(error => {
                res.status(405).send({ error })
            });

        return;
    }

    res.status(405).send({ error: 'not alowed' });
})

item.post('/item/createinvestmentplan', authenticateToken, (req, res) => {
    if (req.user && req.user._id) {

        InvestmentPlan.createinvestmentplan(req.body)
            .then(success => {
                res.status(200).send({ success })
            })
            .catch(error => {
                res.status(405).send({ error })
            });

        return;
    }

    res.status(405).send({ error: 'not alowed' });
});

item.post('/item/createsavingsplanitem', authenticateToken, (req, res) => {
    if (req.user && req.user._id) {

        SavingsPlan.createsavingsitem(req.body)
            .then(success => {
                res.status(200).send({ success })
            })
            .catch(error => {
                res.status(405).send({ error })
            });

        return;
    }

    res.status(405).send({ error: 'not alowed' });
})

item.post('/item/create', authenticateToken, (req, res) => {
    if (req.user && req.user._id) {
        const { type } = req.body;


        if (type === 'notification') {
            ItemEditor.createNotification(req.body)
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

item.get('/items', authenticateToken, async (req, res) => {
    /*if (req.user && req.user._id) {
        const { type, userid } = req.query;

        if (type === 'loans') {
            const loans = await ItemEditor.getLoans();
            res.status(200).send({ success: { message: 'success', type: 'admin loans get', content: loans } })
        }

        if (type === 'investmentplans') {
            const investementplans = await ItemEditor.getInvestmentplans();
            res.status(200).send({ success: { message: 'success', type: 'admin investment plans get', content: investementplans } })
        }

        if (type === 'savingsplans') {
            const savingsplans = await ItemEditor.getSavingsplans();
            res.status(200).send({ success: { message: 'success', type: 'admin savings plans get', content: savingsplans } })
        }

        if (type === 'notifications' && userid) {
            const notifications = await ItemEditor.getNotificationsByUser(userid);
            res.status(200).send({ success: { message: 'success', type: 'admin notifications get', content: notifications } })
        }

        if (type === 'notifications') {
            const notifications = await ItemEditor.getNotifications();
            res.status(200).send({ success: { message: 'success', type: 'admin notifications get', content: notifications } })
        }

        return;
    }


    res.status(405).send({ error: 'not alowed' });*/
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