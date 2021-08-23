import { localStorageGet } from "../../utils/localStorage"
import { CLEARAUTH, SETAUTH, SETAUTHERROR } from "../constants/authConstants"

const initialState = {
    token: localStorageGet('token'),
    user: localStorageGet('user'),
    authError: ''
}

const authReducer = (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case SETAUTH:
            const { user, token } = payload
            return { token, user, authError: '' }
        case CLEARAUTH:
            return { token: null, user: null, authError: '' }
        case SETAUTHERROR:
            const { errorMessage } = payload
            return { ...state, authError: errorMessage }
        default:
            return state
    }
}

export default authReducer
