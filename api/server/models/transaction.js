const mongoose = require('mongoose');
const { Schema } = mongoose;

import Account from './account';

const transactionSchema = new Schema({
    user: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true,
        //enum: ['deposit', 'withdrawal', 'transfer']
    },
    status: {
        type: String,
        required: true,
        default: 'pending',
        // enum: ['success', 'pending', 'failed', 'in review']
    },
    destinationbank: {
        type: String,
        required: true,
    },
    destinationcountry: {
        type: String,
        required: true,
    },
    destinationaccount: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    date: { type: String, default: Date.now }
});

transactionSchema.statics.createtransaction = async function ({
    amount,
    type,
    status,
    date,
    destinationcountry,
    destinationbank,
    destinationaccount,
    user
}) {
    return new Promise(async (resolve, reject) => {
        try {
            const Transaction = this;
            const amnt = parseFloat(`${amount}`.replace(/,/g, ''), 10);

            const newtransaction = new Transaction({
                amount: amnt,
                type,
                status,
                date,
                destinationcountry,
                destinationbank,
                destinationaccount,
                user
            });

            const account = await Account.findOne({ user });

            const transactions = [newtransaction._id, ...account.transactions];

            account.transactions = transactions

            if (type === 'deposit') {
                let balance = parseFloat(account.balance);
                let newbalance = balance += amnt;
                account.balance = newbalance;
            }

            await newtransaction.save();
            await account.save();

            resolve({ message: 'success', type: 'balance update', content: { account, newtransaction } });
        } catch (error) {
            reject({ message: 'error', type: 'transaction creation', reason: error });
        }
    });
}

transactionSchema.statics.updatetransaction = async function ({
    id,
    amount,
    type,
    status,
    date,
    destinationcountry,
    destinationbank,
    destinationaccount,
}) {
    try {
        const Transaction = this;

        const transact = await Transaction.findOne({ _id: id });
        transact.amount = parseFloat(`${amount}`.replace(/,/g, ''), 10);
        transact.type = type;
        transact.status = status;
        transact.date = date;
        transact.destinationcountry = destinationcountry;
        transact.destinationbank = destinationbank;
        transact.destinationaccount = destinationaccount


        await transact.save();

        return { message: 'success', type: 'transaction update', content: transact }
    } catch (error) {
        throw new Error(error)
    }
}

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;