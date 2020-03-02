import React from 'react';
import { useUser } from 'reactfire';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({component: Component, ...rest}) => {
    const User = useUser() 

    return (
        <Route  {...rest} render={(props) => (
            User
            ? <Component {...props} />
            : <Redirect to='/login' />
        )}
        />
    ) 
   
}

export default PrivateRoute