import { useDispatch, useSelector } from "react-redux"
import { signout } from "../redux/actions/authActions"

const Header = () => {
    const { token } = useSelector(state => state.auth)
    const dispatch = useDispatch()

    const handleSignout = () => {
        dispatch(signout())
    }

    return (
        <div className='h-14 bg-green-800 flex items-center justify-between px-5'>
            <h3 className='text-white text-2xl'>Colony 13</h3>
            {token && <p className='text-white cursor-pointer' onClick={handleSignout}>Signout</p>}
        </div>
    )
}

export default Header
