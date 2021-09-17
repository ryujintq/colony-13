import axios from '../../api/axios'
import { SET_AUTH, SET_AUTH_ERROR, CLEAR_AUTH, UPDATE_USER } from '../constants/authConstants'
import { localStorageRemove, localStorageSet } from '../../utils/localStorage'

export const login = (username, password) => async dispatch => {
    try {
        const { data: { data: { user, token } } } = await axios.post('/auth/login', { username, password })
        storeAuthData(user, token)
        dispatch({ type: SET_AUTH, payload: { user, token } })
    } catch (error) {
        dispatchError(error, dispatch)
    }
}

export const signup = sigupData => async dispatch => {
    try {
        const { data: { data: { user, token } } } = await axios.post('/auth/signup', sigupData)
        storeAuthData(user, token)
        dispatch({ type: SET_AUTH, payload: { user, token } })
    } catch (error) {
        dispatchError(error, dispatch)
    }
}

export const updateCharacterInfo = (username, characterInfo, callBack) => async dispatch => {
    try {
        const { data: { data: { user } } } = await axios.post(`/user/${username}`, characterInfo)
        callBack()
        localStorageSet('user', JSON.stringify(user))
        dispatch({ type: UPDATE_USER, payload: user })
    } catch (error) {
        dispatchError(error, dispatch)
    }
}

export const setAuthError = message => dispatch => {
    dispatch({ type: SET_AUTH_ERROR, payload: { message } })
}

export const signout = () => dispatch => {
    dispatch({ type: CLEAR_AUTH })
    localStorageRemove('user')
    localStorageRemove('token')
}

const storeAuthData = (user, token) => {
    localStorageSet('user', JSON.stringify(user))
    localStorageSet('token', token)
}

const dispatchError = (error, dispatch) => {
    dispatch({ type: SET_AUTH_ERROR, payload: { message: error.response.data.error } })
}
