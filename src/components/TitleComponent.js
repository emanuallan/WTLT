import React from "react";
import { Typography } from "@material-ui/core";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

export default class TitleComponent extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    render() {
        return (
            <React.Fragment>
                <div className="title-wrapper">
                    {/* <div className="small-title-text">
                        <Typography variant="subtitle2">
                            {" "}
                            What is the latest in{" "}
                        </Typography>
                    </div> */}

                    <div className="title-text">
                        <Typography variant="h2" style={{fontSize:"500%"}}> {this.props.topic} </Typography>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
