const mongoose = require('mongoose');
const { Schema } = mongoose;

const userLoanSchema = new Schema({
    user: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true, //id of loan item
    },
    amount: {
        type: Number,
        required: true,
    },
    paybackamount: {
        type: Number,
    },
    reason: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: 'pending' //accepted
    },
    additionaldata: { type: Schema.Types.Mixed, default: {} }
});

const UserLoan = mongoose.model('UserLoan', userLoanSchema);

module.exports = UserLoan;