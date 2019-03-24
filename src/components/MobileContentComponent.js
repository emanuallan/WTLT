import React from "react";
import { Tabs, Tab } from "@material-ui/core";

class MobileContentComponent extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Tabs>
                    <Tab label="Conservative" />
                    <Tab label="Liberal" />
                </Tabs>
            </React.Fragment>
        );
    }
}

export default MobileContentComponent;
