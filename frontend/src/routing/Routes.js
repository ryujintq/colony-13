import { Route, Switch } from "react-router-dom"
import Login from "../pages/Login"
import Main from "../pages/Main"
import Signup from "../pages/Signup"
import PrivateRoute from "./PrivateRoute"

const Routes = () => {
    return (
        <Switch>
            <Route path='/login' component={Login} />
            <Route path='/signup' component={Signup} />
            <PrivateRoute exact path='/' component={Main} />
        </Switch>
    )
}

export default Routes
