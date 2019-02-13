import React from "react";

export default function ArticleComponent(props) {
    return (
        <div className={"news-container " + props.className}>
            <h2>Source: {props.article.source.name}</h2>
            <p>Article Title: {props.article.title}</p>
            <p>Author: {props.article.author}</p>
            <p>Description: {props.article.description}</p>
            <p>Published At: {props.article.publishedAt}</p>
            <p>URL: <a href={props.article.url}>{props.article.url}</a></p>
        </div>
    );
}