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
        <div className='bg-yellow-600 absolute top-0 w-full h-12'>
            <div className='max-w-7xl flex items-center justify-between mx-auto px-5 h-full'>
                <h3 className='text-2xl cursor-pointer' onClick={handleHomeClick}>Ravensgate</h3>
                {token && (
                    <div className='flex'>
                        <HeaderLink iconClass='fas fa-home' text='Home' onClick={handleHomeClick} />
                        <HeaderLink iconClass='fas fa-user' text='Character' onClick={handleCharacterClick} />
                        <HeaderLink iconClass='fas fa-sign-out-alt' text='Signout' onClick={handleSignout} />
                    </div>
                )}
            </div>
        </div>
    )
}

export default Header
