import React from "react";
import ContentComponent from "../components/ContentComponent";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Mobile from "../components/MobileContentComponent";
import MediaQuery from "react-responsive";

export default class HomePage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <ContentComponent />
                <Footer />
            </React.Fragment>
        );
    }
}
