import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PrivateRoute from './services/PrivateRoute'

import Profile from './pages/Profile/Profile'
import Home from './pages/Home/Home'
import SignUp from './pages/SignUp/SignUp'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/signup" component={SignUp} />
                <PrivateRoute path="/profile" component={Profile} />
            </Switch>
        </BrowserRouter>
    )
}

