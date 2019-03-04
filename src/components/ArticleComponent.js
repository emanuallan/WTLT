import React from "react";
import Moment from "moment";
import logo from "../assets/logo.jpg";
import Grid from "@material-ui/core/Grid";

export default function ArticleComponent(props) {
    Moment.locale('en');
    var date = props.article.publishedAt;
    var author = props.article.author;
    var image = props.article.urlToImage;
    if (!author || author.length <= 0) {
        author = "an unnamed journalist at " + props.article.source.name;
    }

    if (!image || image.length <= 0) {
        image = logo;
    }

    return (
        <a href={props.article.url}>
            <div className={"news-container " + props.className}>
                <Grid container>

                    <Grid item xs={4}>
                        <img src={image} alt="newsImage" className="center"></img>
                        <p style={{ fontSize: "280%", textAlign: "left", margin: "0px", marginTop: "5%" }}><b>{props.article.source.name}</b></p>
                    </Grid>

                    <Grid item xs={8}>
                        <h2 className="raisedbox" style={{ marginLeft: "17%", fontSize: "150%" }}>{props.article.title}</h2>
                        <p className="raisedbox" style={{ marginLeft: "34%", padding: "5px", fontSize: "95%" }}> {props.article.description}</p>
                        <p className="right" style={{ borderTop: "1px solid white", marginLeft: "10%" }}>Written by {author}</p>
                        <p className="right">{Moment(date).format('LLL')}</p>
                    </Grid>


                    {/* <p><a href={props.article.url}>{props.article.url}</a></p> */}

                </Grid>
            </div>
        </a >
    );
}