import { useSelector } from "react-redux"
import { Redirect, Route } from "react-router-dom"

const PrivateRoute = ({ component: Component, ...rest }) => {
    const { token } = useSelector(state => state.auth)

    return (
        <Route {...rest} render={props => token ? <Component {...props} /> : <Redirect to='/login' />} />
    )
}

export default PrivateRoute
