import responder from "../util/responder.js";

export const health = (req, res) => {
    responder(res, null, 'Server is running');
}