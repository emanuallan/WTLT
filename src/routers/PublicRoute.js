import React from "react";
import { Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";

export const PublicRoute = ({ isAuthenticated, component: Component, ...rest }) => (
    <Route
        {...rest}
        component={props => (
            <React.Fragment>
                <CssBaseline />

                <Component {...props} />
            </React.Fragment>
        )}
    />
);

export default PublicRoute;
