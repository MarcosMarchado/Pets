import React from 'react'
import { Route, Redirect } from "react-router-dom";
import { getToken } from './isAuthenticated'


const PrivateRoute = ({ component: Component, ...rest }: any) => (
    <Route
        {...rest}
        render={props =>
            getToken() ? (
                <Component {...props} />
            ) : (
                    <Redirect to={{ pathname: "/", state: { from: props.location } }} />
                )
        }
    />
);

export default PrivateRoute