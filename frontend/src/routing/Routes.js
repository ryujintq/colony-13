import { Route, Switch } from "react-router-dom"
import War from "../pages/War"
import Character from "../pages/Character"
import Login from "../pages/Login"
import Main from "../pages/Main"
import Signup from "../pages/Signup"
import PrivateRoute from "./PrivateRoute"
import NewWar from "../pages/NewWar"

const Routes = () => {
    return (
        <div className='w-full h-full max-w-7xl mx-auto px-5' >
            <Switch>
                <Route path='/login' component={Login} />
                <Route path='/signup' component={Signup} />
                <PrivateRoute exact path='/' component={Main} />
                <PrivateRoute path='/character' component={Character} />
                <PrivateRoute path='/war/:id' component={War} />
                <PrivateRoute path='/newwar' component={NewWar} />
            </Switch>
        </div>
    )
}

export default Routes
