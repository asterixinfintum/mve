const mongoose = require('mongoose');

const { Schema } = mongoose;

import User from './user';

const messageSchema = new Schema({
    user: {
        type: String,
        default: null
    },
    label: {
        type: String,
        required: true
    },
    content: {
        type: String, 
        required: true
    },
    adminmsg: {
        type: Boolean,
        default: false
    }
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;