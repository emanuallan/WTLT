import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import { setTopic } from "../redux/topics-reducer";
import Banner from "../assets/Banner.jpg";

export class Header extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {
            topic: ""
        };
        this.onHistoryClick = this.onHistoryClick.bind(this);
        this.onMathClick = this.onMathClick.bind(this);
        this.onWritingClick = this.onWritingClick.bind(this);
        this.onFrenchClick = this.onFrenchClick.bind(this);
        this.onScienceClick = this.onScienceClick.bind(this);
        this.onOtherClick = this.onOtherClick.bind(this);
    }

    onHistoryClick() {
        // alert("history");
        this.props.setTopic("History");
    }

    onMathClick() {
        // alert("math");
        this.props.setTopic("Math");
    }

    onWritingClick() {
        this.props.setTopic("Writing");
    }

    onFrenchClick() {
        this.props.setTopic("French");
    }

    onScienceClick() {
        this.props.setTopic("Science");
    }

    onOtherClick() {
        this.props.setTopic("Other");
    }

    render() {
        return (
            <React.Fragment>
                <div className="header-wrapper">
                    <Grid container>
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
                        <Grid item xs={12}>
                            <img src={Banner} style={{ width: "100%" }} />
                        </Grid>

                        <Grid item xs={12}>
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
                                    onClick={this.onWritingClick}
                                >
                                    {" "}
                                    Writing{" "}
                                </Button>
                                <Button
                                    variant="text"
                                    className="header-bottom-buttons"
                                    style={{ textTransform: "none", color: "#505050" }}
                                    onClick={this.onFrenchClick}
                                >
                                    {" "}
                                    French{" "}
                                </Button>
                                <Button
                                    variant="text"
                                    className="header-bottom-buttons"
                                    style={{ textTransform: "none", color: "#505050" }}
                                    onClick={this.onScienceClick}
                                >
                                    {" "}
                                    Science{" "}
                                </Button>
                                <Button
                                    variant="text"
                                    className="header-bottom-buttons"
                                    style={{ textTransform: "none", color: "#505050" }}
                                    onClick={this.onOtherClick}
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
        topic: state.topic
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
