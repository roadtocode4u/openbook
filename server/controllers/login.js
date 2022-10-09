import md5 from 'md5';

import User from '../models/User.js';

export const loginPost = async (req, res) => {
    const { email, password } = req.body

    if (!email) {
        return res.send({
            success: false,
            message: "email cannot be empty",
        });
    }

    if (!password) {
        return res.send({
            success: false,
            message: "password cannot be empty",
        });
    }

    const user = await User.findOne({
        email,
        password: md5(password)
    })

    if (user) {
        res.send({
            success: true,
            data: user,
            message: "User logged in successfully",
        })
    }
    else {
        res.send({
            success: false,
            data: "Wrong Credentials! Please try again."
        })
    }
}