import { useState } from "react"
import Input from "../components/Input"
import Button from "../components/Button"
import SmallText from "../components/SmallText"
import { useDispatch, useSelector } from "react-redux"
import { signup, setAuthError } from "../redux/actions/authActions"
import Message from "../components/Message"
import { useEffect } from "react"
import { useHistory } from "react-router-dom"

const Signup = () => {
    const [signupData, setSignupData] = useState({ username: '', password: '', password2: '' })
    const { username, password, password2 } = signupData
    const { token, authError } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        dispatch(setAuthError(''))
        if (token) history.push('/')
    }, [token, history, dispatch])

    const handleDataChange = e => {
        const { name, value } = e.target

        setSignupData(prevState => {
            return { ...prevState, [name]: value }
        })
    }

    const handleOnSubmit = e => {
        e.preventDefault()

        if (username === '' || password === '' || password2 === '') {
            return dispatch(setAuthError('Please fill all fields'))
        }

        if (password !== password2) {
            return dispatch(setAuthError('Passwords do not match'))
        }

        dispatch(signup(signupData))
    }

    return (
        <div className='h-full flex items-center justify-center'>
            <div className='bg-white bg-opacity-70 p-5 shadow-md w-72 flex flex-col items-center justify-between text-black'>
                <form onSubmit={handleOnSubmit} id='signupForm'>
                    <h2 className='text-3xl'>Signup</h2>
                    <div className='my-10'>
                        {authError && <Message text={authError} status='error' />}
                        <Input value={signupData.username} onChange={handleDataChange} text='Username' name='username' />
                        <Input value={signupData.password} onChange={handleDataChange} text='Password' type='password' name='password' />
                        <Input value={signupData.password2} onChange={handleDataChange} text='Confirm Password' type='password' name='password2' />
                    </div>
                    <div>
                        <Button text='Confirm' form='signupForm' />
                        <SmallText text='Dont have an account? Sign up here!' redirect='/login' />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup
