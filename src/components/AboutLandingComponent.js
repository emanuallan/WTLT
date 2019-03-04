import React from "react";
import Grid from "@material-ui/core/Grid";
import TableCell from "@material-ui/core/TableCell";
import Button from "@material-ui/core/Button";
import history from "../routers/purplehistory";
import Banner from "../assets/Banner.jpg";
import allan from "../assets/allan.jpg";
import jahz from "../assets/jahz.jpg";
import logo from "../assets/logo.jpg";

export class AboutLandingComponent extends React.Component {
    render() {
        return (
            <div id="mainBlock" style={{ width: "100%", margin: "auto", background: "lavender" }}>
                <Grid container>
                    <Grid xs={4} className="landing-grid">

                        <h1 style={{ color: "#5F4BB6", fontSize: "320%", marginTop: "6%", marginBottom: "0px" }}> Creators of</h1>
                        <img
                            src={logo}
                            style={{ width: "41%", borderRadius: "20px", marginTop: "4.5%" }}
                            alt="banner with purple pundit logo"
                        />

                        <div className="banner-text" style={{ padding: "0px" }}>

                            <p style={{ fontSize: "95%", textAlign: "left" }}>
                                {" "}
                                Detecting and understanding bias is an important aspect of politics.
                                Therefore, the Purple Pundit project was created to better simplify and display the political differences
                                that exist within each of the major media news outlets available. Thanks to the <a href="https://newsapi.org">NewsApi.org</a>, Purple Pundit currently features over 50 media sources including
                                CNN, MSNBC, Fox News, The Washington Times, amongst others. The color that determines the political bias of each of the sources is determined by the
                                <a href="https://mediabiasfactcheck.com/"> Media Bias Fact Checker</a>.
                            </p>
                            <p style={{ fontSize: "95%", textAlign: "left", paddingTop: "5%" }}>
                                In an age in which effective political discussion is held to a minimum
                                and corrupted with identity politics, it is important to understand both sides of the argument. Purple Pundit was created not with
                                the intent to encourage either political side, rather it was created to promote discussion, comprehension, and the well-informed individual.
                                {" "}
                            </p>

                        </div>


                    </Grid>

                    {/* <div className="header-top-menuContainer">
                        <Button
                            variant="text"
                            size="small"
                            className="header-top-buttons"
                            style={{ textTransform: "none", color: "#5F4BB6" }}
                            onClick={() => history.push("/")}
                        >
                            {" "}
                            Home{" "}
                        </Button>

                        <Button
                            variant="text"
                            size="small"
                            className="header-top-buttons"
                            style={{ textTransform: "none", color: "#5F4BB6" }}
                            onClick={() => history.push("/about")}
                        >
                            {" "}
                            About{" "}
                        </Button>
                    </div>
                    <Grid item xs={12}>
                        <img
                            id="header-img"
                            src={Banner}
                            style={{ width: "100%" }}
                            alt="banner with purple pundit logo"
                        />
                    </Grid> */}

                    <Grid xs={4} className="landing-grid">
                        <img
                            src={allan}
                            alt="avatar"
                            className="avatar-img"
                        />

                        <div className="banner-text">
                            <h1> Allan Serna </h1>

                            <hr />

                            <p>
                                {" "}
                                4th Year Computer Science Student at the <span style={{ color: "#B3A369" }}><b>Georgia
                                Institute of Technology</b></span> with a minor in Society, Sports, and Technology from the GT
                                School of History and Sociology.
                                {" "}
                            </p>

                            <div className="social-links">
                                {/* Personal Website*/}
                                <a
                                    href="https://aeserna.com"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    <i
                                        className="fa fa-external-link-square"
                                        aria-hidden="true"
                                    />
                                </a>

                                {/* GithHub*/}
                                <a
                                    href="https://github.com/emanuallan"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    <i
                                        className="fa fa-github-square"
                                        aria-hidden="true"
                                    />
                                </a>

                                {/* LinkedIn*/}
                                <a
                                    href="https://linkedin.com/in/allan-serna"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    <i
                                        className="fa fa-linkedin-square"
                                        aria-hidden="true"
                                    />
                                </a>
                            </div>
                        </div>
                    </Grid>

                    <Grid xs={4} className="landing-grid">
                        <img
                            src={jahz}
                            alt="avatar"
                            className="avatar-img"
                        />

                        <div className="banner-text">
                            <h1> Jahziel Villasana </h1>

                            <hr />

                            <p>
                                {" "}
                                4th Year Computer Science Student at the <span style={{ color: "#B3A369" }}><b>Georgia
                                Institute of Technology</b></span>.{" "}
                            </p>

                            <div className="social-links">
                                {/* Personal Website*/}
                                <a
                                    href="https://jahz.co"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    <i
                                        className="fa fa-external-link-square"
                                        aria-hidden="true"
                                    />
                                </a>

                                {/* GithHub*/}
                                <a
                                    href="https://github.com/jahzielv"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    <i
                                        className="fa fa-github-square"
                                        aria-hidden="true"
                                    />
                                </a>

                                {/* LinkedIn*/}
                                <a
                                    href="https://www.linkedin.com/in/jahziel-villasana-espinoza-5b616b106/"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    <i
                                        className="fa fa-linkedin-square"
                                        aria-hidden="true"
                                    />
                                </a>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        );
    }
}
