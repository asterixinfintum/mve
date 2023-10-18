import express from 'express';

import User from '../../models/user';

const register = express();

register.post('/checkduplicateuser', async (req, res) => {
    const { email, phonenumber } = req.body;

    User.checkforduplicates(email, phonenumber)
        .then(success => {
            res.status(200).send({ success })
        })
        .catch(error => {
            res.status(405).send({ error })
        })
});

register.post('/signup', async (req, res) => {
    const { firstname, lastname, email, phonenumber, password } = req.body;

    User.register({ firstname, lastname, email, phonenumber, password })
        .then(success => {
            res.status(201).send({ success })
        })
        .catch(error => {
            console.log(error)
            res.status(405).send({ error })
        })
});

export default register;