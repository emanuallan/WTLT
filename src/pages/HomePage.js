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
                <MediaQuery query="(max-device-width: 480px)">
                    <Mobile />
                </MediaQuery>
                <MediaQuery query="(min-device-width: 1224px)">
                    <ContentComponent />
                </MediaQuery>
                <Footer />
            </React.Fragment>
        );
    }
}
