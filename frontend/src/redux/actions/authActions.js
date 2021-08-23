import axios from '../../api/axios'
import { SETAUTH, SETAUTHERROR, CLEARAUTH } from '../constants/authConstants'
import { localStorageRemove, localStorageSet } from '../../utils/localStorage'

export const login = (username, password) => async dispatch => {
    const { data: { data: { user, token } } } = await axios.post('/auth/login', { username, password })
    storeAuthData(user, token)
    dispatch({ type: SETAUTH, payload: { user, token } })
}

export const signup = sigupData => async dispatch => {
    const { data: { data: { user, token } } } = await axios.post('/auth/signup', sigupData)
    storeAuthData(user, token)
    dispatch({ type: SETAUTH, payload: { user, token } })
}

export const setAuthError = (errorMessage) => dispatch => {
    dispatch({ type: SETAUTHERROR, payload: { errorMessage } })
}

export const signout = () => dispatch => {
    dispatch({ type: CLEARAUTH })
    localStorageRemove('user')
    localStorageRemove('token')
}

const storeAuthData = (user, token) => {
    localStorageSet('user', user)
    localStorageSet('token', token)
}