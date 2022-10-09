export const health = (req, res) => {
    res.json({
        status: 'ok',
        message: 'Server is running'
    })
}