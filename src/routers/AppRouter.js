import React from "react";
import render from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";

const AppRouter = () => (
    <Router>
        <Switch>
            <PublicRoute path="/" component={HomePage} exact={true} />
            <PublicRoute path="/about" component={AboutPage} />
        </Switch>
    </Router>
);

export default AppRouter;
