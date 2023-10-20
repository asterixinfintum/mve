const mongoose = require('mongoose');
const { Schema } = mongoose;

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
        type: Number,
        required: true,
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

const UserSaving = mongoose.model('UserSaving', userSavingSchema);

module.exports = UserSaving;