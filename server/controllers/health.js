import responder from "../util/responder.js";
import { flushCache } from './../util/cache.js'

export const health = (req, res) => {
    flushCache();
    responder(res, null, 'Server is running');
}