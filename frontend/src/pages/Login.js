import Input from "../components/Input"
import { useEffect, useState } from "react"
import Button from "../components/Button"
import SmallText from "../components/SmallText"
import { useDispatch, useSelector } from "react-redux"
import { login, setAuthError } from "../redux/actions/authActions"
import Message from "../components/Message"
import { useHistory } from "react-router-dom"

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const { token, authError } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        dispatch(setAuthError(''))
        if (token) history.push('/')
    }, [token, history, dispatch])

    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()

        if (username === '' || password === '') {
            return dispatch(setAuthError('Please fill in all fields'))
        }

        dispatch(login(username, password))
    }

    return (
        <div className='h-full flex items-center justify-center'>
            <div className='bg-white bg-opacity-70 p-5 shadow-md w-72 flex flex-col items-center justify-between text-black'>
                <form onSubmit={handleSubmit} id='loginForm'>
                    <h2 className='text-3xl'>Login</h2>
                    <div className='my-10'>
                        {authError && <Message text={authError} status='error' />}
                        <Input value={username} onChange={handleUsernameChange} text='Username' />
                        <Input value={password} onChange={handlePasswordChange} text='Password' type='password' />
                    </div>
                    <div>
                        <Button text='Confirm' form='loginForm' />
                        <SmallText text='Dont have an account? Sign up here!' redirect='/signup' />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
