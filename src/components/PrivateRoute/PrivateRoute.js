import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';

import { LoggedInContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
    // consume UserContext data from App
    const [loggedIn] = useContext(LoggedInContext);

    return (
        <Route
            {...rest}
            render={({ location }) =>
                loggedIn.id ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute; // to App