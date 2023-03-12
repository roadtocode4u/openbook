import responder from "../util/responder";

export const health = (req, res) => {
    responder(res, null, 'Server is running');
}