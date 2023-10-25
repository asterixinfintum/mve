const mongoose = require('mongoose');
const { Schema } = mongoose;

const notificationSchema = new Schema({
    user: {
        type: String,
        default: null
    },
    seenby: { //for general messages without a user
        type: Array,
        default: []
    },
    label: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    read: {
        type: Boolean,
        default: false
    },
    time: { type: Date, default: Date.now }
});

notificationSchema.statics.markread = function (userid) {
    return new Promise(async (resolve, reject) => {
        const Notification = this;
        try {
            const usernotes = await Notification.find({ user: userid });

            const usernotesPromises = usernotes.map(async usernote => {
                if (!usernote.read) {
                    usernote.read = true;
                }
                usernote.save();
                return usernote;
            });

            const notifications = await Promise.all(usernotesPromises);
            resolve({ message: 'success', type: 'user read notifications', content: notifications });
        } catch (error) {
            reject(error)
        }
    });
}

notificationSchema.statics.createnotification = async function (body) {
    try {
        const Note = this;
        const newnote = new Note(body);

        await newnote.save();

        return { message: 'success', type: 'notification creation', content: newnote };
    } catch (error) {
        throw new Error({ message: 'error', type: 'notification creation', reason: error });
    }
}

const Notification = mongoose.model('Notification', notificationSchema);

module.exports = Notification;