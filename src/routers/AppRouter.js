import React from "react";
import { Router, Switch } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import History from "./purplehistory";

const AppRouter = () => (
    <Router history={History}>
        <Switch>
            <PublicRoute path="/" component={HomePage} exact={true} />
            <PublicRoute path="/about" component={AboutPage} />
        </Switch>
    </Router>
);

export default AppRouter;
