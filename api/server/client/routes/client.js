import express from 'express';

import User from '../../models/user';
import Account from '../../models/account';
import Card from '../../models/card';
import Transaction from '../../models/transaction';
import UserContact from '../../models/usercontact';
import UserLoan from '../models/userloan';
import Notification from '../../models/notification';
import UserInvestment from '../models/userinvestment';
import UserSaving from '../models/usersaving';

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
        const newuserinvestment = new UserInvestment({
            ...req.body, user: req.user._id
        });

        await newuserinvestment.save();

        const { user, investmentid, amount } = newuserinvestment;

        Account.addinvestmentplan(user, investmentid, amount)
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

client.post('/client/loanrequest', authenticateToken, async (req, res) => {
    if (req.user && req.user._id) {
        UserLoan.createuserloan(req.body)
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

client.get('/client/getuserloans', authenticateToken, async (req, res) => {
    if (req.user && req.user._id) {
        const { user } = req.query;
        UserLoan.getuserloans(user)
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

client.get('/client/getinvestments', authenticateToken, async (req, res) => {
    if (req.user && req.user._id) {
        const { user } = req.query;

        UserInvestment.getuserinvestments(user)
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

client.post('/client/joinsavingsplan', authenticateToken, async (req, res) => {
    if (req.user && req.user._id) {

        UserSaving.createsavingsplan(req.body)
            .then(success => {
                res.status(200).send({ success });
            })
            .catch(error => {
                res.status(405).send({ error });
                throw new Error(error);
            });

        return;
    }

    res.status(405).send({ error: 'not alowed' });
});

client.get('/client/savingsplan', authenticateToken, async (req, res) => {
    if (req.user && req.user._id) {

        const { user } = req.query;

        UserSaving.getusersavingsplans(user)
            .then(success => {
                res.status(200).send({ success });
            })
            .catch(error => {
                res.status(405).send({ error });
                throw new Error(error);
            });

        return;
    }

    res.status(405).send({ error: 'not alowed' });
})

export default client;