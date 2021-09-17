import { localStorageGet } from "../../utils/localStorage"
import { CLEAR_AUTH, SET_AUTH, SET_AUTH_ERROR, UPDATE_USER } from "../constants/authConstants"

const initialState = {
    token: localStorageGet('token'),
    user: localStorageGet('user') ? JSON.parse(localStorageGet('user')) : {},
    authError: ''
}

const authReducer = (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case SET_AUTH:
            const { user, token } = payload
            return { token, user, authError: '' }
        case CLEAR_AUTH:
            return { token: null, user: null, authError: '' }
        case UPDATE_USER:
            return { ...state, user: payload }
        case SET_AUTH_ERROR:
            const { message } = payload
            return { ...state, authError: message }
        default:
            return state
    }
}

export default authReducer
