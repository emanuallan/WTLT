import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { setTopic } from "../redux/topics-reducer";
import Banner from "../assets/Banner.jpg";
import MenuButtonComponent from "./MenuButtonComponent";
import history from "../routers/purplehistory";
import { withStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import PropTypes from "prop-types";
import logo from "../assets/ppLogo.png";
import { headerTopics } from "../resources/headerTopics";

const styles = theme => ({
    buttonText: {
        color: "purple"
    }
});

export class Header extends React.Component {
    constructor(props) {
        //console.log("HEADER INSTANTIATED");
        super(props);
        // console.log(this.props);
        this.state = {
            topic: ""
        };
        this.onTopic1Click = this.onTopic1Click.bind(this);
        this.onTopic2Click = this.onTopic2Click.bind(this);
        this.onTopic3Click = this.onTopic3Click.bind(this);
        this.onTopic4Click = this.onTopic4Click.bind(this);
        this.onTopic5Click = this.onTopic5Click.bind(this);
        this.onTopic6Click = this.onTopic6Click.bind(this);
        this.onTopic1Click();
    }

    onTopic1Click() {
        // alert("history");
        this.props.setTopic("");
    }

    onTopic2Click() {
        // alert("math");
        this.props.setTopic("Immigration");
    }

    onTopic3Click() {
        this.props.setTopic("LGBTQ");
    }

    onTopic4Click() {
        this.props.setTopic("Abortion");
    }

    onTopic5Click() {
        this.props.setTopic("Gun Policy");
    }

    onTopic6Click() {
        this.props.setTopic("Trump");
    }

    componentDidMount() {}

    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <div className="header-wrapper">
                    <Grid container justify="center">
                        <div className="header-top-menuContainer">
                            <Button
                                variant="text"
                                size="small"
                                className="header-top-buttons"
                                style={{
                                    textTransform: "none",
                                    color: "#5F4BB6",
                                    fontSize: "95%"
                                }}
                                onClick={() => history.push("/")}
                            >
                                <Typography
                                    variant="button"
                                    className={classes.buttonText}
                                >
                                    Home
                                </Typography>
                            </Button>

                            <Button
                                variant="text"
                                size="small"
                                className="header-top-buttons"
                                style={{
                                    textTransform: "none",
                                    color: "#5F4BB6",
                                    fontSize: "95%"
                                }}
                                onClick={() => history.push("/about")}
                            >
                                <Typography
                                    variant="button"
                                    className={classes.buttonText}
                                >
                                    About
                                </Typography>
                            </Button>
                        </div>
                        <img
                            src={logo}
                            style={{ width: "10%", alignSelf: "center" }}
                            alt="banner with purple pundit logo"
                        />

                        <Grid item xs={12}>
                            <div className="header-bottom-menuContainer">
                                {/* {headerTopics.map(topic => ( */}
                                <Button
                                    variant="text"
                                    style={{
                                        textTransform: "none",
                                        // color: "white",
                                        fontSize: "110%"
                                    }}
                                    onClick={this.onTopic1Click}
                                    className={"header-bottom-buttons"}
                                >
                                    <Typography
                                        variant="button"
                                        className={classes.buttonText}
                                    >
                                        Latest
                                    </Typography>
                                </Button>
                                {/* // ))} */}
                                <Button
                                    variant="text"
                                    style={{
                                        textTransform: "none",
                                        // color: "white",
                                        fontSize: "110%"
                                    }}
                                    onClick={this.onTopic2Click}
                                    className={"header-bottom-buttons"}
                                >
                                    <Typography
                                        variant="button"
                                        className={classes.buttonText}
                                    >
                                        Immigration
                                    </Typography>
                                </Button>
                                <Button
                                    variant="text"
                                    style={{
                                        textTransform: "none",
                                        // color: "white",
                                        fontSize: "110%"
                                    }}
                                    onClick={this.onTopic3Click}
                                    className={"header-bottom-buttons"}
                                >
                                    <Typography
                                        variant="button"
                                        className={classes.buttonText}
                                    >
                                        LGBTQ
                                    </Typography>
                                </Button>
                                <Button
                                    variant="text"
                                    style={{
                                        textTransform: "none",
                                        // color: "white",
                                        fontSize: "110%"
                                    }}
                                    onClick={this.onTopic4Click}
                                    className={"header-bottom-buttons"}
                                >
                                    <Typography
                                        variant="button"
                                        className={classes.buttonText}
                                    >
                                        Abortion
                                    </Typography>
                                </Button>
                                <Button
                                    variant="text"
                                    style={{
                                        textTransform: "none",
                                        // color: "white",
                                        fontSize: "110%"
                                    }}
                                    onClick={this.onTopic5Click}
                                    className={"header-bottom-buttons"}
                                >
                                    <Typography
                                        variant="button"
                                        className={classes.buttonText}
                                    >
                                        Gun Policy
                                    </Typography>
                                </Button>

                                <MenuButtonComponent />
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

Header.propTypes = {
    classes: PropTypes.object.isRequired
};
const HeaderE = withStyles(styles)(Header);
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HeaderE);
