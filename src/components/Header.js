import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import { setTopic } from "../redux/topics-reducer";
import Banner from "../assets/Banner.jpg";

export class Header extends React.Component {
    constructor(props) {
        console.log("HEADER INSTANTIATED");
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
        this.props.setTopic("Latest");
    }

    onTopic2Click() {
        // alert("math");
        this.props.setTopic("Immigration");
    }

    onTopic3Click() {
        this.props.setTopic("LGBT");
    }

    onTopic4Click() {
        this.props.setTopic("Abortion");
    }

    onTopic5Click() {
        this.props.setTopic("Gun Control");
    }

    onTopic6Click() {
        this.props.setTopic("Trump");
    }

    componentDidMount() {}

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
                            <img
                                src={Banner}
                                style={{ width: "100%" }}
                                alt="banner with Donald Trump and Nancy Pelosi"
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <div className="header-bottom-menuContainer">
                                <Button
                                    variant="text"
                                    className="header-bottom-buttons"
                                    style={{ textTransform: "none", color: "#505050" }}
                                    onClick={this.onTopic1Click}
                                >
                                    {" "}
                                    Latest{" "}
                                </Button>
                                <Button
                                    variant="text"
                                    className="header-bottom-buttons"
                                    style={{ textTransform: "none", color: "#505050" }}
                                    onClick={this.onTopic2Click}
                                >
                                    {" "}
                                    Immigration{" "}
                                </Button>
                                <Button
                                    variant="text"
                                    className="header-bottom-buttons"
                                    style={{ textTransform: "none", color: "#505050" }}
                                    onClick={this.onTopic3Click}
                                >
                                    {" "}
                                    LGBT{" "}
                                </Button>
                                <Button
                                    variant="text"
                                    className="header-bottom-buttons"
                                    style={{ textTransform: "none", color: "#505050" }}
                                    onClick={this.onTopic4Click}
                                >
                                    {" "}
                                    Abortion{" "}
                                </Button>
                                <Button
                                    variant="text"
                                    className="header-bottom-buttons"
                                    style={{ textTransform: "none", color: "#505050" }}
                                    onClick={this.onTopic5Click}
                                >
                                    {" "}
                                    Gun Control{" "}
                                </Button>
                                <Button
                                    variant="text"
                                    className="header-bottom-buttons"
                                    style={{ textTransform: "none", color: "#505050" }}
                                    onClick={this.onTopic6Click}
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
