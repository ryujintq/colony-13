import { Route, Switch } from "react-router-dom"
import War from "../pages/War"
import Character from "../pages/Character"
import Login from "../pages/Login"
import Main from "../pages/Main"
import Signup from "../pages/Signup"
import PrivateRoute from "./PrivateRoute"

const Routes = () => {
    return (
        <div className='w-full h-full' >
            <Switch>
                <Route path='/login' component={Login} />
                <Route path='/signup' component={Signup} />
                <PrivateRoute exact path='/' component={Main} />
                <PrivateRoute path='/character' component={Character} />
                <PrivateRoute path='/war/:id' component={War} />
            </Switch>
        </div>
    )
}

export default Routes
