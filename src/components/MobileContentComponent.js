import React from "react";
import { Tabs, Tab } from "@material-ui/core";
import ArticleStream from "./ArticleStreamComponent";

class MobileContentComponent extends React.Component {
    state = {
        value: 0
    };

    handleTabChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { value } = this.state;
        console.info("in mobile content component render");
        return (
            <React.Fragment>
                <Tabs value={value} onChange={this.handleTabChange}>
                    <Tab label="Liberal" />
                    <Tab label="Conservative" />
                </Tabs>
                {value === 0 && (
                    <ArticleStream articleData={this.props.lArticles} streamSide="L" />
                )}
                {value === 1 && (
                    <ArticleStream articleData={this.props.cArticles} streamSide="C" />
                )}
            </React.Fragment>
        );
    }
}

export default MobileContentComponent;
