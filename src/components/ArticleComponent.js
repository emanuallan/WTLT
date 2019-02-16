import React from "react";

export default function ArticleComponent(props) {
    return (
        <div className={"news-container " + props.className}>
            <a href={props.article.url}><img src={props.article.urlToImage} alt="newsImage" className="center"></img></a>
            <h2>{props.article.title}</h2>
            {/* <h2>{props.article.source.name}</h2> */}
            {/* <p>Author: {props.article.author}</p> */}
            <p>{props.article.description}</p>
            <p className="right">Published by {props.article.author} at {props.article.publishedAt}</p>
            {/* <p><a href={props.article.url}>{props.article.url}</a></p> */}
        </div>
    );
}