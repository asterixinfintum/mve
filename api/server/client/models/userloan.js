const mongoose = require('mongoose');
const { Schema } = mongoose;

import Loan from '../../models/loan';

const userLoanSchema = new Schema({
    user: {
        type: String,
        required: true,
    },
    loanid: {
        type: String,
        required: true,
    },
    amount: {
        type: Number
    },
    status: {
        type: String,
        default: 'pending'
    },
    totalrepayment: {
        type: Number
    },
    message: {
        type: String,
        default: 'Your loan request is in review'
    }
});

userLoanSchema.statics.createuserloan = async function ({ user, loanid, amount, totalrepayment }) {
    return new Promise(async (resolve, reject) => {
        try {
            const Userln = this;

            const newuserloan = Userln({
                user,
                loanid,
                amount,
                totalrepayment
            });

            await newuserloan.save();
            resolve({ message: 'success', type: 'user loan apply', content: newuserloan });
        } catch (error) {
            reject({ message: 'error', type: 'user loan apply', reason: error });
        }
    })
}

userLoanSchema.statics.getuserloans = async function (user) {
    try {
        const Userln = this;
        const userloans = await Userln.find({ user });
        const userloansarr = [];

        for (const userloan of userloans) {
            const loanitem = await Loan.findOne({ _id: userloan.loanid });

            if (loanitem) {
                userloansarr.push({
                    userloan,
                    loanname: loanitem.name,
                    loanid: loanitem._id,
                });
            }
        }

        return { message: 'success', type: 'user loans get', content: userloansarr };
    } catch (error) {
        throw { message: 'error', type: 'user loans get', reason: error }; 
    }
}

const UserLoan = mongoose.model('UserLoan', userLoanSchema);

module.exports = UserLoan;