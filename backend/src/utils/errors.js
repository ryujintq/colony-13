import ErrorResponse from "./errorResponse.js"

export const usernameInvalid = () => {
    return new ErrorResponse('Please enter a valid username', 400)
}

export const passwordInvalid = () => {
    return new ErrorResponse('Please enter a valid password', 400)
}

export const invalidCredentials = () => {
    return new ErrorResponse('Invalid credentials', 400)
}

export const userNotFound = () => {
    return new ErrorResponse('User not found', 404)
}

export const warNotFound = () => {
    return new ErrorResponse('War not found', 404)
}
