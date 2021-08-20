import ErrorResponse from "../utils/ErrorResponse.js"

const errorHandler = (err, req, res, next) => {
    if (err.name === 'CastError') {
        const message = 'Resource not found with given Id'
        err = new ErrorResponse(message, 404)
    }

    if (err.code === 11000) {
        const message = 'User already exists'
        err = new ErrorResponse(message, 400)
    }

    if (err.name === 'ValidationError') {
        const message = Object.values(err.errors).map(val => val.message)
        err = new ErrorResponse(message, 400)
    }

    res.status(err.statusCode || 500).json({ error: err.message || 'Server Error' })
}

export default errorHandler
