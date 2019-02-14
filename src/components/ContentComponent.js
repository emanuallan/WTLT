import React from "react";
import Button from "@material-ui/core/Button";
import TitleComponent from "./TitleComponent";
import ArticleComponent from "./ArticleComponent";
import { connect } from "react-redux";
import { setTopic } from "../redux/topics-reducer";
import Grid from "@material-ui/core/Grid";

/* API URL for request */
var url =
    "https://newsapi.org/v2/top-headlines?" +
    "country=us&" +
    "apiKey=9e6c4875383b47c19201e7694edc4eb7";
var req = new Request(url);

/* State Configuration */
export class ContentComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            totalResults: null,
            loading: false,
            articles: undefined
        };
    }

    componentDidMount() {
        fetch(req)
            .then(response => response.json())
            .then(data =>
                this.setState({
                    totalResults: data.totalResults,
                    articles: data.articles,
                    loading: false
                })
            );
    }

    componentDidUpdate() {
        console.log("props: ");
        console.log(this.props);
        if (this.state.loading) {
            fetch(req)
                .then(response => response.json())
                .then(data =>
                    this.setState({
                        totalResults: data.totalResults,
                        loading: false,
                        articles: data.articles
                    })
                );
        }
    }

    /* Rendering Configuration (doesn't work though there's no error in the Console) */
    render() {
        console.log(this.state.articles);
        let topic = this.props.topic;
        return (
            <React.Fragment>
                <TitleComponent topic={topic} />
                {/* NOTE: CERTAIN INFO WON'T APPEAR IF THE API DOES NOT RETURN A VALUE */}
                <Grid container>
                    <Grid item xs={12} style={{ textAlign: "center" }}>
                        {this.state.totalResults && (
                            <p>Amount of Results: {this.state.totalResults}</p>
                        )}
                        <Button
                            variant="outlined"
                            onClick={() => {
                                this.setState({ loading: true });
                            }}
                        >
                            {" "}
                            Refresh{" "}
                        </Button>
                    </Grid>

                    <Grid item xs={6} style={{ marginTop: 5 }}>
                        {/* <div className="news-container lib-news-container">
                            {this.state.totalResults && <p>Amount of Results: {this.state.totalResults}</p>}
                            {this.state.articles && <p>Source: {this.state.articles[0].source.name}</p>}
                            {this.state.articles && <p>Article Title: {this.state.articles[0].title}</p>}
                            {this.state.articles && <p>Author: {this.state.articles[0].author}</p>}
                            {this.state.articles && <p>Description: {this.state.articles[0].description}</p>}
                            {this.state.articles && <p>published At: {this.state.articles[0].publishedAt}</p>}
                            {this.state.articles && <p>URL: {this.state.articles[0].url}</p>}
                        </div> */}

                        {this.state.articles && (
                            <ArticleComponent
                                article={this.state.articles[0]}
                                className="lib-news-container"
                            />
                        )}

                        {this.state.articles && (
                            <ArticleComponent
                                article={this.state.articles[1]}
                                className="lib-news-container"
                            />
                        )}

                        {this.state.articles && (
                            <ArticleComponent
                                article={this.state.articles[2]}
                                className="lib-news-container"
                            />
                        )}

                        {this.state.articles && (
                            <ArticleComponent
                                article={this.state.articles[3]}
                                className="lib-news-container"
                            />
                        )}
                    </Grid>

                    <Grid item xs={6} style={{ marginTop: 5 }}>
                        {this.state.articles && (
                            <ArticleComponent
                                article={this.state.articles[4]}
                                className="cons-news-container"
                            />
                        )}
                        {this.state.articles && (
                            <ArticleComponent
                                article={this.state.articles[5]}
                                className="cons-news-container"
                            />
                        )}
                        {this.state.articles && (
                            <ArticleComponent
                                article={this.state.articles[6]}
                                className="cons-news-container"
                            />
                        )}
                        {this.state.articles && (
                            <ArticleComponent
                                article={this.state.articles[7]}
                                className="cons-news-container"
                            />
                        )}
                    </Grid>
                </Grid>
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
)(ContentComponent);
