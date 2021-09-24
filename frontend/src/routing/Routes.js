import { Route, Switch } from "react-router-dom"
import Character from "../pages/Character"
import Login from "../pages/Login"
import Main from "../pages/Main"
import Signup from "../pages/Signup"
import PrivateRoute from "./PrivateRoute"
import NewWar from "../pages/NewWar"
import UpcomingWar from '../pages/UpcomingWar'
import PastWar from '../pages/PastWar'

const Routes = () => {
    return (
        <div className='w-full h-full max-w-7xl mx-auto px-5' >
            <Switch>
                <Route path='/login' component={Login} />
                <Route path='/signup' component={Signup} />
                <PrivateRoute exact path='/' component={Main} />
                <PrivateRoute path='/character' component={Character} />
                <PrivateRoute path='/upcomingwar/:id' component={UpcomingWar} />
                <PrivateRoute path='/pastwar/:id' component={PastWar} />
                <PrivateRoute path='/newwar' component={NewWar} />
            </Switch>
        </div>
    )
}

export default Routes
