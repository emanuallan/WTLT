import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { AboutLandingComponent } from "../components/AboutLandingComponent";

export default class AboutPage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <AboutLandingComponent />
                <Footer />
            </React.Fragment>
        );
    }
}
