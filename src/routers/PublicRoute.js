import React from "react";
// import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
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

// const mapStateToProps = state => {
//     // isAuthenticated: !!state.auth.uid
//     return {
//         isLoginPending: state.isLoginPending,
//         isLoginSuccess: state.isLoginSuccess,
//         loginError: state.loginError
//     };
// };

export default PublicRoute;
