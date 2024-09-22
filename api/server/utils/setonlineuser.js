import User from '../models/user';

async function setonlineuser(userid) {
    if (!userid) {
        return;
    }

    try {
        const user = await User.findOne({ _id: userid });

        user.online = true;

        await user.save();

       // console.log(user);

        return user._id;
    } catch (error) {
        console.log(error);
    }
}

export default setonlineuser;