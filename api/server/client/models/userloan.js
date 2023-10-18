const mongoose = require('mongoose');
const { Schema } = mongoose;

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
    totalrepayment: {
        type: Number
    }
});

const UserLoan = mongoose.model('UserLoan', userLoanSchema);

module.exports = UserLoan;