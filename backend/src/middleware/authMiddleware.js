import jwt from 'jsonwebtoken'

const authMiddleware = (req, res, next) => {
    const { authorization } = req.headers

    if (!authorization) {
        notAuth(res)
    }

    const token = authorization.replace('Bearer ', '')

    jwt.verify(token, process.env.JWTSECRET, (err, payload) => {
        if (err) {
            notAuth(res)
        }

        const { id } = payload
        req.id = id
        next()
    })
}

export default authMiddleware

const notAuth = res => {
    return res.status(401).json({ status: 'fail', message: 'You must be logged in' })
}
