import React from 'react'

import { Switch, Redirect } from 'react-router-dom'
import PrivateRoute from '../components/PrivateRoute'
import PublicRoute from '../components/PublicRoute'

import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/Register.page'
import ProfilePage from '../pages/ProfilePage'


export const Routes = () => {
    return(
        <Switch>
            <PrivateRoute exact path="/" component={HomePage} />
            <PrivateRoute path="/profile" component={ProfilePage} />
            <PublicRoute path="/login" component={LoginPage} />            
            <PublicRoute path="/register" component={RegisterPage} />            
            <Redirect to="/" />
        </Switch>
    )
}
