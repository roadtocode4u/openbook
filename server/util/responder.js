const responder = (res, data, message, success = true) => {
    return res.json({
        success: success,
        message: message,
        data: data,
    });
};

export default responder;
