import { Link } from "react-router-dom"

const SmallText = ({ text, redirect }) => {
    return (
        <Link to={redirect}>
            <p className='cursor-pointer text-sm mt-2'>{text}</p>
        </Link>
    )
}

export default SmallText
