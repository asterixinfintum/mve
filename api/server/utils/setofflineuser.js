import User from '../models/user';

async function setofflineuser(userid) {
    if (!userid) {
        return;
    }

    try {
        const user = await User.findOne({ _id: userid });

        user.online = false;

        const currentTime = Date.now();

        const lastSeen = currentTime;

        user.lastSeen = lastSeen;

        await user.save();

        return user._id;
    } catch (error) {
        console.log(error);
    }
}

export default setofflineuser;