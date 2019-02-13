import React from "react";
import Button from "@material-ui/core/Button";
import TitleComponent from "./TitleComponent";
import { connect } from "react-redux";
import { setTopic } from "../redux/topics-reducer";
import { Typography } from "@material-ui/core";
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
        console.log(
            "RENDER CALLED\nCURRENT AMOUNT OF RESULTS " + this.state.totalResults
        );
        console.log(this.state.articles);
        let topic = this.props.topic;
        return (
            <React.Fragment>
                <TitleComponent topic={topic} />
                {/* NOTE: CERTAIN INFO WON'T APPEAR IF THE API DOES NOT RETURN A VALUE */}
                <Button
                    variant="outlined"
                    onClick={() => {
                        this.setState({ loading: true });
                    }}
                >
                    {" "}
                    Load Info{" "}
                </Button>

                <Grid container>
                    <Grid item xs={6} style={{ marginTop: 5 }}>
                        <div className="lib-news-container">
                            {this.state.totalResults && <p>Amount of Results: {this.state.totalResults}</p>}
                            {this.state.articles && <p>Source: {this.state.articles[0].source.name}</p>}
                            {this.state.articles && <p>Article Title: {this.state.articles[0].title}</p>}
                            {this.state.articles && <p>Author: {this.state.articles[0].author}</p>}
                            {this.state.articles && <p>Description: {this.state.articles[0].description}</p>}
                            {this.state.articles && <p>published At: {this.state.articles[0].publishedAt}</p>}
                            {this.state.articles && <p>URL: {this.state.articles[0].url}</p>}
                        </div>
                        <div className="lib-news-container">
                            <h1> HELLO </h1>
                        </div>
                        <div className="lib-news-container">
                            <h1> HELLO </h1>
                        </div>
                        <div className="lib-news-container">
                            <h1> HELLO </h1>
                        </div>
                    </Grid>

                    <Grid item xs={6} style={{ marginTop: 5 }}>
                        <div className="cons-news-container">
                            <h1> HELLO </h1>
                        </div>
                        <div className="cons-news-container">
                            <h1> HELLO </h1>
                        </div>
                        <div className="cons-news-container">
                            <h1> HELLO </h1>
                        </div>
                        <div className="cons-news-container">
                            <h1> HELLO </h1>
                        </div>
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
