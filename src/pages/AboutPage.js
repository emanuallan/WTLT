import React from "react";
import Header from "../components/Header";
import { AboutLandingComponent } from "../components/AboutLandingComponent";

export default class AboutPage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <AboutLandingComponent />
            </React.Fragment>
        );
    }
}
