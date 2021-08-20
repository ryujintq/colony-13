import jwt from 'jsonwebtoken'

const genToken = id => {
    return jwt.sign({ id }, process.env.JWT_SECRET)
}

export default genToken
