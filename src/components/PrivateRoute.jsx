import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'


const PrivateRoute = ({component: Component, logged, token, ...rest}) => {

    const user = logged && token

    return (
        <Route  {...rest} render={(props) => (
            user
            ? <Component {...props} />
            : <Redirect to='/login' />
        )}
        />
    ) 
   
}

const mapStateToProps = ({login: {logged,user}}) =>({
    logged,
    token: user.token,
})

export default connect(mapStateToProps)(PrivateRoute)