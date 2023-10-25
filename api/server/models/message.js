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

messageSchema.statics.addadminmessage = async function (body) {
    try {
        const MessageCreate = this;

        const newmessage = new MessageCreate(body);

        await newmessage.save();

        return { message: 'success', type: 'message create', content: newmessage };
    } catch (error) {
        throw new Error({ message: 'error', type: 'message create', reason: error }); 
    }
}  

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;