import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import { setTopic } from "../redux/topics-reducer";

export class Header extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {
            topic: ""
        };
        this.onHistoryClick = this.onHistoryClick.bind(this);
        this.onMathClick = this.onMathClick.bind(this);
    }

    onHistoryClick() {
        // alert("history");
        this.props.setTopic("history");
    }

    onMathClick() {
        // alert("math");
        this.props.setTopic("math");
    }

    render() {
        return (
            <React.Fragment>
                <div className="header-wrapper">
                    <Grid container>
                        <Grid item xs={12} style={{ marginTop: 5, marginRight: 5 }}>
                            <div className="header-top-menuContainer">
                                <Button
                                    variant="text"
                                    size="small"
                                    className="header-top-buttons"
                                    style={{ textTransform: "none", color: "#f5f5f5" }}
                                >
                                    {" "}
                                    Home{" "}
                                </Button>
                                <Button
                                    variant="text"
                                    size="small"
                                    className="header-top-buttons"
                                    style={{ textTransform: "none", color: "#f5f5f5" }}
                                >
                                    {" "}
                                    Forum{" "}
                                </Button>
                                <Button
                                    variant="text"
                                    size="small"
                                    className="header-top-buttons"
                                    style={{ textTransform: "none", color: "#f5f5f5" }}
                                >
                                    {" "}
                                    Chat{" "}
                                </Button>
                                <Button
                                    variant="text"
                                    size="small"
                                    className="header-top-buttons"
                                    style={{ textTransform: "none", color: "#f5f5f5" }}
                                >
                                    {" "}
                                    About{" "}
                                </Button>
                                <Button
                                    variant="text"
                                    size="small"
                                    className="header-top-buttons"
                                    style={{ textTransform: "none", color: "#f5f5f5" }}
                                >
                                    {" "}
                                    FAQ{" "}
                                </Button>
                                <Button
                                    variant="text"
                                    size="small"
                                    className="header-top-buttons"
                                    style={{ textTransform: "none", color: "#f5f5f5" }}
                                >
                                    {" "}
                                    Contact Us{" "}
                                </Button>
                            </div>
                        </Grid>

                        <Grid item xs={12} style={{ marginTop: 135 }}>
                            <div className="header-bottom-menuContainer">
                                <Button
                                    variant="text"
                                    className="header-bottom-buttons"
                                    style={{ textTransform: "none", color: "#505050" }}
                                    onClick={this.onMathClick}
                                >
                                    {" "}
                                    Math{" "}
                                </Button>
                                <Button
                                    variant="text"
                                    className="header-bottom-buttons"
                                    style={{ textTransform: "none", color: "#505050" }}
                                    onClick={this.onHistoryClick}
                                >
                                    {" "}
                                    History{" "}
                                </Button>
                                <Button
                                    variant="text"
                                    className="header-bottom-buttons"
                                    style={{ textTransform: "none", color: "#505050" }}
                                >
                                    {" "}
                                    Writing{" "}
                                </Button>
                                <Button
                                    variant="text"
                                    className="header-bottom-buttons"
                                    style={{ textTransform: "none", color: "#505050" }}
                                >
                                    {" "}
                                    French{" "}
                                </Button>
                                <Button
                                    variant="text"
                                    className="header-bottom-buttons"
                                    style={{ textTransform: "none", color: "#505050" }}
                                >
                                    {" "}
                                    Science{" "}
                                </Button>
                                <Button
                                    variant="text"
                                    className="header-bottom-buttons"
                                    style={{ textTransform: "none", color: "#505050" }}
                                >
                                    {" "}
                                    Other{" "}
                                </Button>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        isMath: state.isMath,
        isHistory: state.isHistory,
        isChanging: state.isChanging
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setTopic: topic => {
            setTopic(topic)(dispatch);
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);
