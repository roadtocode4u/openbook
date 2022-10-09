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

    User.findOne({ email: email }, (err, user) => {
        if (user) {
            res.send({
                success: false,
                message: "user already exist"
            })
        }
        else {
            const newUser = new User({
                fullName,
                email,
                password: md5(password),
                mobile
            })
            const savedUser = newUser.save();
            res.send({
                success: true,
                data: savedUser,
                message: "user created successfully"
            })
        }
    })

}