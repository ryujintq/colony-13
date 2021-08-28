import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { signout } from "../redux/actions/authActions"
import HeaderLink from "./HeaderLink"

const Header = () => {
    const { token } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const history = useHistory()

    const handleHomeClick = () => {
        history.push('/')
    }

    const handleCharacterClick = () => {
        history.push('/character')
    }

    const handleSignout = () => {
        dispatch(signout())
    }

    return (
        <div className='h-14 bg-green-800 flex items-center justify-between px-5'>
            <h3 className='text-white text-2xl'>Colony 13</h3>
            {token && (
                <div className='flex'>
                    <HeaderLink iconClass='fas fa-home' text='Home' onClick={handleHomeClick} />
                    <HeaderLink iconClass='fas fa-user' text='Character' onClick={handleCharacterClick} />
                    <HeaderLink iconClass='fas fa-sign-out-alt' text='Signout' onClick={handleSignout} />
                </div>
            )}
        </div>
    )
}

export default Header
