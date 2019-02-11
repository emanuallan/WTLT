import React from "react";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

export class TitleComponent extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="title-wrapper">
                    <div className="small-title-text">
                        <Typography variant="subtitle2">
                            {" "}
                            What is the latest in{" "}
                        </Typography>
                    </div>

                    <div className="title-text">
                        <Typography variant="h2"> History </Typography>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default TitleComponent;
