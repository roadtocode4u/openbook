import md5 from 'md5';

import User from '../models/User.js';
import responder from '../util/responder.js';

export const signupPost = async (req, res) => {
    const { fullName, email, password, mobile } = req.body;

    if (!fullName || !email || !password || !mobile) {
        const emptyFields = [];
        if (!fullName) emptyFields.push('fullName');
        if (!email) emptyFields.push('email');
        if (!password) emptyFields.push('password');
        if (!mobile) emptyFields.push('mobile');

        return responder(res, null, `Please provide ${emptyFields.join(', ')}`, false);
    }

    const user = await User.findOne({ email: email })
    if (user) {
        return responder(res, null, "user already exist", false);
    }
    const newUser = new User({
        fullName,
        email,
        password: md5(password),
        mobile
    })
    const savedUser = await newUser.save();
    responder(res, savedUser, "user created successfully");
}