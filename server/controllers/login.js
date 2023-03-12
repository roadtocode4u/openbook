import md5 from 'md5';

import User from '../models/User.js';
import responder from '../util/responder.js';

export const loginPost = async (req, res) => {
    const { email, password } = req.body

    let errorMessages = []

    if (!email) errorMessages.push("email cannot be empty")
    if (!password) errorMessages.push("password cannot be empty")

    if (errorMessages.length) {
        return responder(res, null, errorMessages.toString(), false);
    }

    const user = await User.findOne({
        email,
        password: md5(password)
    })

    res.json({
        success: user ? true : false,
        message: user ? "Login Successfully!" : "Wrong Credentials!",
        data: user
    })
}