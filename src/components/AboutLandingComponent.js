import React from "react";
import Grid from "@material-ui/core/Grid";
import TableCell from "@material-ui/core/TableCell";

export class AboutLandingComponent extends React.Component {
    render() {
        return (
            <div style={{ width: "100%", margin: "auto", color: "lavender" }}>
                <Grid container>
                    <Grid xs={6} className="landing-grid">
                        <img
                            src="https://icons-for-free.com/free-icons/png/512/984120.png"
                            alt="avatar"
                            className="avatar-img"
                        />

                        <div className="banner-text">
                            <h1> Allan Serna </h1>

                            <hr />

                            <p>
                                {" "}
                                4th Year Computer Science Student at the Georgia
                                Institute of Technology.{" "}
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

                    <Grid xs={6} className="landing-grid">
                        <img
                            src="http://icons-for-free.com/free-icons/png/512/984108.png"
                            alt="avatar"
                            className="avatar-img"
                        />

                        <div className="banner-text">
                            <h1> Jahziel Villasana </h1>

                            <hr />

                            <p>
                                {" "}
                                4th Year Computer Science Student at the Georgia
                                Institute of Technology.{" "}
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
