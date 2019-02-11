import React from "react";
import ContentComponent from "../components/ContentComponent";
import Header from "../components/Header";
import TitleComponent from "../components/TitleComponent";

export default class HomePage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <TitleComponent />
                <ContentComponent />
            </React.Fragment>
        );
    }
}
