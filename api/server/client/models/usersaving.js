const mongoose = require('mongoose');
const { Schema } = mongoose;

import InvestmentPlan from '../../models/investmentplan';
import Account from '../../models/account';
import Transaction from '../../models/transaction';
import Savingsplan from '../../models/savingsplan';

console.log(InvestmentPlan, Account, Transaction, 'ths here')

const userSavingSchema = new Schema({
    user: {
        type: String,
        required: true,
    },
    savingsplanid: {
        type: String,
        required: true, //id of loan item
    },
    amount: {
        type: Number,
        required: true,
    },
    totaldeposit: {
        type: Number,
        required: true,
    },
    profit: {
        type: Number,
        required: true,
        default: 0
    },
    target: {
        type: Number
    },
    loss: {
        type: Number,
        required: true,
        default: 0
    },
    status: {
        type: String,
        default: 'pending' //accepted
    },
    deadline: {
        type: String
    },
    additionaldata: { type: Schema.Types.Mixed, default: {} }
});

userSavingSchema.statics.createsavingsplan = async function (savingsplan) {
    try {
        const Usersavnsplan = this;

        const newusersavings = Usersavnsplan(savingsplan);

        await newusersavings.save();

        await Account.addsavingsplan(newusersavings.user, newusersavings._id, newusersavings.totaldeposit)

        return { message: 'success', type: 'user savingsplan create', content: newusersavings };
    } catch (error) {
        console.log(error, 'checl error here')
        throw error;
    }
}

userSavingSchema.statics.getusersavingsplans = async function (user) {
    try {
        const Usersavnsplan = this;
        const usersavingsplans = await Usersavnsplan.find({ user });

        const usersavingsarr = [];

        for (const usersaving of usersavingsplans) {
            const usersavingitem = await Savingsplan.findOne({ _id: usersaving.savingsplanid });

            if (usersavingitem) {
                usersavingsarr.push({
                    usersaving,
                    savingsplanname: usersavingitem.name,
                    savingsplanid: usersavingitem._id
                })
            }
        }

        return { message: 'success', type: 'user savingsplan get', content: usersavingsarr };
    } catch (error) {
        return { message: 'error', type: 'get savingsplan', reason: error }
    }
}


const UserSaving = mongoose.model('UserSaving', userSavingSchema);

module.exports = UserSaving;