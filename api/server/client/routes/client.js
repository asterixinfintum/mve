import express from 'express';

import User from '../../models/user';
import Account from '../../models/account';
import Card from '../../models/card';
import Transaction from '../../models/transaction';
import UserContact from '../../models/usercontact';
import UserLoan from '../models/userloan';
import Notification from '../../models/notification';

import authenticateToken from '../../utils/authenticateToken';

const client = express();

client.get('/currentclient', authenticateToken, async (req, res) => {

    if (req.user && req.user._id) {
        const { id } = req.query;
        const user = await User.findOne({ _id: id });

        if (!user) {
            return res.status(405).send({ error: 'not alowed' })
        }

        const account = await Account.findOne({ _id: user.account });
        const cards = await Card.find({ user: user._id });

        return res.status(200).send({ success: { message: 'success', type: 'auth', content: { user, account, cards } } });
    }

    console.log(error)
    res.status(405).send({ error: 'not alowed' });
});

client.post('/transaction/transfer', authenticateToken, async (req, res) => {
    if (req.user && req.user._id) {
        const { nameofbnk, country, accountno, amounttosend } = req.body;

        const newtransfer = new Transaction({
            user: req.user._id,
            type: 'transfer',
            destinationbank: nameofbnk,
            destinationcountry: country,
            destinationaccount: accountno,
            amount: amounttosend
        });

        await newtransfer.save();

        User.addTransferToUser(req.user._id, newtransfer._id)
            .then(success => {
                return res.status(200).send({ success });
            })
            .catch(error => {
                res.status(405).send({ error });
            });

        return;
    }

    res.status(405).send({ error: 'not alowed' });
});

client.get('/transaction/get', authenticateToken, async (req, res) => {
    if (req.user && req.user._id) {
        User.getTransactions(req.user._id)
            .then(success => {
                return res.status(200).send({ success });
            })
            .catch(error => {
                res.status(405).send({ error });
            });

        return;
    }

    res.status(405).send({ error: 'not alowed' });
});

client.post('/loanapply', authenticateToken, async (req, res) => {
    if (req.user && req.user._id) {

        const newloan = new UserLoan({
            user: req.user._id,
            ...req.body
        });

        await newloan.save();

        Account.addloan(req.user._id, newloan._id)
            .then(success => {
                return res.status(200).send({ success });
            })
            .catch(error => {
                res.status(405).send({ error });
            });


        return;
    }

    res.status(405).send({ error: 'not alowed' });
})

client.post('/client/viewnotifications', authenticateToken, async (req, res) => {
    if (req.user && req.user._id) {
        Notification.markread(req.user._id)
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

client.post('/client/supportcontact', authenticateToken, async (req, res) => {
    if (req.user && req.user._id) {

        User.createmsg(req.user._id, req.body)
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

client.post('/client/joininvestment', authenticateToken, async (req, res) => {
    if (req.user && req.user._id) {
        Account.addinvestmentplan(req.user._id, req.body)
            .then(success => {
                res.status(200).send({ success })
            })
            .catch(error => {
                res.status(405).send({ error })
            });

        return
    }

    res.status(405).send({ error: 'not alowed' });
});

client.post('/client/addcontact', authenticateToken, async (req, res) => {
    if (req.user && req.user._id) {
        UserContact.createcontact({ userid: req.user._id, ...req.body })
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

client.get('/client/getcontacts', authenticateToken, async (req, res) => {
    if (req.user && req.user._id) {
        UserContact.getusercontacts({ userid: req.user._id })
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

export default client;