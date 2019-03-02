import React from "react";
import Moment from "moment";
import logo from "../assets/logo.jpg";

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
                <p className="right-corner" style={{ fontSize: "22px" }}><b>{props.article.source.name}</b></p>
                <img src={image} alt="newsImage" className="center"></img>
                <h2>{props.article.title}</h2>
                {/* <h2>{props.article.source.name}</h2> */}
                {/* <p>Author: {props.article.author}</p> */}
                <p>{props.article.description}</p>
                <p className="right">Written by {author}</p>
                <p className="right">{Moment(date).format('LLL')}</p>

                {/* <p><a href={props.article.url}>{props.article.url}</a></p> */}
            </div>
        </a>
    );
}