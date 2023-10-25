import express from 'express';

import User from '../../models/user';
import Account from '../../models/account';
import Card from '../../models/card';
import Transaction from '../../models/transaction';

import authenticateToken from '../../utils/authenticateToken';

const clientedit = express();

clientedit.post('/client/profile', authenticateToken, async (req, res) => {
    if (req.user && req.user._id) {
        const { balance, password, newpassword, accounttype, userid } = req.body;

        try {
            await Account.updateBalance(userid, balance)

            if (newpassword.length) {
                await User.updatepassword(userid, newpassword, password);
            }

            await Account.updateType(userid, accounttype);

            return res.status(200).send({ success: 'success' });
        } catch (error) {
            res.status(405).send({ error })
        }

        return;
    }

    res.status(405).send({ error: 'not alowed' });
});

clientedit.post('/client/editcard', authenticateToken, (req, res) => {
    if (req.user && req.user._id) {
        const { digits, expiry, cvv } = req.body;
        const { cardid } = req.query;

        Card.updatecard(cardid, { digits, expiry, cvv })
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

clientedit.post('/client/accountupdate', authenticateToken, (req, res) => {
    if (req.user && req.user._id) {

        const {
            user,
            balance,
            loansaggregate,
            income,
            savingsaggregatetarget,
            savingsaggregate,
            investmentgrowth
        } = req.body;

        Account.updatefigures({
            user,
            balance,
            loansaggregate,
            income,
            savingsaggregatetarget,
            savingsaggregate,
            investmentgrowth
        }).then(success => {
            return res.status(200).send({ success });
        })
            .catch(error => {
                res.status(405).send({ error });
            });

        return;
    }

    res.status(405).send({ error: 'not alowed' });
});

clientedit.post('/client/createtransaction', authenticateToken, (req, res) => {
    if (req.user && req.user._id) {
        const {
            amount,
            destinationaccount,
            type,
            status,
            date,
            country,
            bank,
            user,
        } = req.body;

        if (amount &&
            type &&
            status &&
            date &&
            country &&
            bank &&
            user) {

            Transaction.createtransaction({
                amount,
                type,
                status,
                date,
                destinationaccount,
                destinationcountry: country,
                destinationbank: bank,
                user,
            }).then(success => {
                return res.status(200).send({ success });
            })
                .catch(error => {
                    console.log(error)
                    res.status(405).send({ error });
                });
        } else {
            res.status(405).send({ error: 'not alowed' });
        }



        return;
    }

    res.status(405).send({ error: 'not alowed' });
});

clientedit.post('/client/edittransaction', authenticateToken, (req, res) => {
    if (req.user && req.user._id) {

        Transaction.updatetransaction(req.body)
            .then(success => {
                return res.status(200).send({ success });
            })
            .catch(error => {
                console.log(error)
                res.status(405).send({ error });
            });
        return;
    }

    res.status(405).send({ error: 'not alowed' });
})

clientedit.get('/client/messages', authenticateToken, (req, res) => {
    if (req.user && req.user._id) {
        const { userid } = req.query;

        User.getusermsgs(userid)
            .then(success => {
                return res.status(200).send({ success });
            })
            .catch(error => {
                console.log(error)
                res.status(405).send({ error });
            });

        return;
    }

    res.status(405).send({ error: 'not alowed' });
});

clientedit.get('/client/investmentplans', authenticateToken, () => {
    if (req.user && req.user._id) {
        const { userid } = req.query;

        Account.getuserinvestments(userid)
    }
});

clientedit.post('/client/savings', authenticateToken, (req, res) => {

});

clientedit.post('/client/editinvestments', authenticateToken, (req, res) => {

});



export default clientedit;