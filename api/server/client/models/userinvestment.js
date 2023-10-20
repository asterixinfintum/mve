const mongoose = require('mongoose');
const { Schema } = mongoose;

import InvestmentPlan from '../../models/investmentplan';

const userInvestmentSchema = new Schema({
    user: {
        type: String,
        required: true,
    },
    investmentid: {
        type: String,
        required: true, //id of loan item
    },
    amount: {
        type: Number,
        required: true,
    },
    potentialprofit: {
        type: Number,
        default: 0
    },
    loss: {
        type: Number,
        default: 0
    },
    status: {
        type: String,
        default: 'created'
    },
    message: {
        type: String,
        default: ''
    }
});

userInvestmentSchema.statics.getuserinvestments = async function (user) {
    try {
        const UserInvestmnt = this;
        const userinvestments = await UserInvestmnt.find({ user });
        const investmentsarr = [];

        for (const userinvestment of userinvestments) {
            const investmentitem = await InvestmentPlan.findOne({ _id: userinvestment.investmentid });

            if (investmentitem) {
                investmentsarr.push({
                    userinvestment,
                    investmentname: investmentitem.name,
                    investmentid: investmentitem._id
                })
            }
        }

        return { message: 'success', type: 'user investment get', content: investmentsarr };
    } catch (error) {
        return { message: 'error', type: 'user investment get', reason: error }
    }
}

const UserInvestment = mongoose.model('UserInvestment', userInvestmentSchema);

module.exports = UserInvestment;