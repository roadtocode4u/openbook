import md5 from 'md5';

import User from '../models/User.js';

export const loginPost = async (req, res) => {
    const { email, password } = req.body

    let errorMessages = []

    if (!email) errorMessages.push("email cannot be empty")
    if (!password) errorMessages.push("password cannot be empty")

    if (errorMessages.length) {
        return res.send({
            success: false,
            message: errorMessages.toString()
        });
    }

    const user = await User.findOne({
        email,
        password: md5(password)
    })

    res.send({
        success: user ? true : false,
        message: user ? "Login Successfully!" : "Wrong Credentials!",
        data: user
    })
}