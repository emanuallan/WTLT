import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { AboutComponent } from "../components/AboutComponent";

export default class AboutPage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <AboutComponent />
            </React.Fragment>
        );
    }
}
