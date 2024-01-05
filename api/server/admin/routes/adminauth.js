import express from 'express';

import Admin from '../models/admin';
import User from '../../models/user';
import Account from '../../models/account';
import Card from '../../models/card';
import Transaction from '../../models/transaction';

import authenticateToken from '../../utils/authenticateToken';

const adminauth = express();

adminauth.get('/currentadmin', authenticateToken, async (req, res) => {
    if (!req.user || !req.user._id) {
        return res.status(401).send({ error: 'Unauthorized access' });
    }

    const { id } = req.query;

    if (req.user._id !== id) {
        return res.status(403).send({ error: 'Forbidden access' });
    }

    try {
        const foundAdmin = await Admin.findOne({ _id: id });

        if (!foundAdmin) {
            return res.status(404).send({ error: 'Admin not found' });
        }

        return res.status(200).send({ success: { message: 'success', type: 'admin auth', content: foundAdmin } });
    } catch (error) {
        console.error('Database error:', error);
        return res.status(500).send({ error: 'Internal Server Error' });
    }
});

adminauth.post('/admin/create', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).send({ error: 'Username and password are required' });
    }

    try {
        const success = await Admin.register({ username, password });
        res.status(200).send({ success });
    } catch (error) {
        console.error('Error creating admin:', error);
        // Determine if it's a client error (like duplicate username) or a server error
        const statusCode = error.isClientError ? 400 : 500;
        res.status(statusCode).send({ error: error.message });
    }
});

adminauth.post('/admin/signin', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).send({ error: 'Username and password are required' });
    }

    try {
        const success = await Admin.login({ username, password });
        res.status(200).send({ success });
    } catch (error) {
        console.error('Error during admin sign-in:', error);
        // Here, you might want to provide a generic error message for security reasons
        res.status(401).send({ error: 'Invalid username or password' });
    }
});

adminauth.get('/admin/getusers', authenticateToken, async (req, res) => {
    if (!req.user || !req.user._id) {
        return res.status(401).send({ error: 'Unauthorized' });
    }

    try {
        const administrator = await Admin.findOne({ _id: req.user._id });

        if (!administrator || !administrator.admin) {
            return res.status(403).send({ error: 'Forbidden: Insufficient privileges' });
        }

        const useritems = await User.find();
        const users = await Promise.all(useritems.map(async user => {
            const [account, cards] = await Promise.all([
                Account.findOne({ _id: user.account }),
                Card.find({ user: user._id })
            ]);

            return {
                details: user,
                account,
                cards
            };
        }));

        res.status(200).send({
            success: {
                message: 'success',
                type: 'platform users',
                content: users
            }
        });
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).send({ error: 'Internal Server Error' });
    }
});

adminauth.get('/admin/getuser', authenticateToken, async (req, res) => {
    if (!req.user || !req.user._id) {
        return res.status(401).send({ error: 'Unauthorized' });
    }

    try {
        const administrator = await Admin.findOne({ _id: req.user._id });

        if (!administrator || !administrator.admin) {
            return res.status(403).send({ error: 'Forbidden: Insufficient privileges' });
        }

        const { userid } = req.query;
        if (!userid) {
            return res.status(400).send({ error: 'User ID is required' });
        }

        const user = await User.findOne({ _id: userid });
        if (!user) {
            return res.status(404).send({ error: 'User not found' });
        }

        const [account, cards] = await Promise.all([
            Account.findOne({ _id: user.account }),
            Card.find({ user: user._id })
        ]);

        const result = {
            details: user,
            account,
            cards
        };

        res.status(200).send({
            success: {
                message: 'success',
                type: 'platform user',
                content: result
            }
        });
    } catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).send({ error: 'Internal Server Error' });
    }
});


adminauth.get('/admin/getusertxns', authenticateToken, async (req, res) => {
    if (!req.user || !req.user._id) {
        return res.status(401).send({ error: 'Unauthorized' });
    }

    try {
        const administrator = await Admin.findOne({ _id: req.user._id });

        if (!administrator || !administrator.admin) {
            return res.status(403).send({ error: 'Forbidden: Insufficient privileges' });
        }

        const { userid } = req.query;
        if (!userid) {
            return res.status(400).send({ error: 'User ID is required' });
        }

        const transactions = await User.getTransactions(userid);
        res.status(200).send({ success: transactions });
    } catch (error) {
        console.error('Error fetching transactions:', error);
        res.status(500).send({ error: 'Internal Server Error' });
    }
});


export default adminauth;