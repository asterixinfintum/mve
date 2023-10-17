import express from 'express';

import Admin from '../models/admin';
import User from '../../models/user';
import Account from '../../models/account';
import Card from '../../models/card';
import Transaction from '../../models/transaction';

import authenticateToken from '../../utils/authenticateToken';

const adminauth = express();

adminauth.post('/admin/create', (req, res) => {
    const { username, password } = req.body;

    Admin.create({ username, password })
        .then(success => {
            res.status(200).send({ success })
        })
        .catch(error => {
            res.status(405).send({ error })
        })
});

adminauth.post('/admin/signin', (req, res) => {
    const { username, password } = req.body;

    Admin.login({ username, password })
        .then(success => {
            res.status(200).send({ success })
        })
        .catch(error => {
            res.status(405).send({ error })
        })
});

adminauth.get('/admin/getusers', authenticateToken, async (req, res) => {
    if (req.user && req.user._id) {
        const administrator = await Admin.findOne({ _id: req.user._id });

        if (administrator && administrator.admin) {
            const useritems = await User.find();

            const userpromises = useritems.map(async user => {
                const account = await Account.findOne({ _id: user.account });
                const cards = await Card.find({ user: user._id });

                const result = {
                    details: user,
                    account,
                    cards
                }

                return result;
            });

            const users = await Promise.all(userpromises);

            res.status(200).send({
                success: {
                    message: 'success',
                    type: 'platform users',
                    content: users
                }
            })
        } else {
            return res.status(405).send({ error })
        }

        return;
    }

    res.status(405).send({ error })
});

adminauth.get('/admin/getuser', authenticateToken, async (req, res) => {
    if (req.user && req.user._id) {
        const administrator = await Admin.findOne({ _id: req.user._id });

        if (administrator && administrator.admin) {
            const { userid } = req.query;

            const user = await User.findOne({ _id: userid });
            const account = await Account.findOne({ _id: user.account });
            const cards = await Card.find({ user: user._id });

            const result = {
                details: user,
                account,
                cards
            }

            res.status(200).send({
                success: {
                    message: 'success',
                    type: 'platform users',
                    content: result
                }
            })

        } else {
            return res.status(405).send({ error })
        }

        return;
    }

    return res.status(405).send({ error })
});

adminauth.get('/admin/getusertxns', authenticateToken, async (req, res) => {
    if (req.user && req.user._id) {
        const administrator = await Admin.findOne({ _id: req.user._id });

        if (administrator && administrator.admin) {
            const { userid } = req.query;

            User.getTransactions(userid)
                .then(success => {
                    return res.status(200).send({ success });
                })
                .catch(error => {
                    res.status(405).send({ error });
                });
        } else {
            return res.status(405).send({ error })
        }

        return;
    }

    return res.status(405).send({ error })
});

export default adminauth;