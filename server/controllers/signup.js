import md5 from 'md5';

import User from '../models/User.js';

export const signupPost = async (req, res) => {
    const { fullName, email, password, mobile } = req.body;

    if (!fullName || !email || !password || !mobile) {
        const emptyFields = [];
        if (!fullName) emptyFields.push('fullName');
        if (!email) emptyFields.push('email');
        if (!password) emptyFields.push('password');
        if (!mobile) emptyFields.push('mobile');

        return res.json({
            status: false,
            message: `Please provide ${emptyFields.join(', ')}`
        })
    }

    const user = await User.findOne({ email: email })
    if (user) {
        return res.json({
            success: false,
            message: "user already exist"
        })
    }
    const newUser = new User({
        fullName,
        email,
        password: md5(password),
        mobile
    })
    const savedUser = await newUser.save();
    res.json({
        success: true,
        data: savedUser,
        message: "user created successfully"
    })
}