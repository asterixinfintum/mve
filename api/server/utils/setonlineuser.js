import User from '../models/user';

async function setonlineuser(userid) {
    if (!userid) {
        return;
    }

    try {
        const user = await User.findOne({ _id: userid });

        user.online = true;

        await user.save();

        return user._id;
    } catch (error) {
        console.log(error);
    }
}

export default setonlineuser;