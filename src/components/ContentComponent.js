import React from "react";
import TitleComponent from "./TitleComponent";
import ArticleComponent from "./ArticleComponent";
import { connect } from "react-redux";
import { setTopic } from "../redux/topics-reducer";
import Grid from "@material-ui/core/Grid";
import ReactGrid from "@material-ui/core/Grid";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import CircularProgress from "@material-ui/core/CircularProgress";
import ArticleStream from "./ArticleStreamComponent";
import MediaQuery from "react-responsive";
import MobileContent from "./MobileContentComponent";

/* State Configuration */
export class ContentComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            totalResults: null,
            loading: false,

            consArticles: undefined,
            libArticles: undefined,
            urlTxtCons: "https://purpleapi.appspot.com/news/conservative",
            urlTxtLib: "https://purpleapi.appspot.com/news/liberal"
            // queries: [
            //     { key: "apiKey", value: "9e6c4875383b47c19201e7694edc4eb7" }
            // ]

            //  +
            // "country=us&" +
            // "apiKey=9e6c4875383b47c19201e7694edc4eb7"
        };
    }

    componentWillReceiveProps = nextProps => {
        // console.log(nextProps);
        this.setState({ contentTopic: nextProps.topic, loading: true });
    };

    componentDidMount = () => {
        let apiURLCons = new URL(this.state.urlTxtCons);
        let apiURLLib = new URL(this.state.urlTxtLib);
        // this.state.queries.forEach(query =>
        //     apiURLCons.searchParams.append(query.key, query.value)
        // );
        apiURLCons.searchParams.append("topic", this.state.contentTopic);
        apiURLLib.searchParams.append("topic", this.state.contentTopic);
        //console.log("url on mount: " + this.state.url);
        fetch(apiURLCons)
            .then(response => response.json())
            .then(data =>
                this.setState({
                    // totalResults: totalResults + data.totalResults,
                    consArticles: data.articles,
                    loading: false
                })
            );
        fetch(apiURLLib)
            .then(response => response.json())
            .then(data =>
                this.setState({
                    libArticles: data.articles,
                    loading: false
                })
            );
    };

    componentDidUpdate = () => {
        if (this.state.loading) {
            let apiURLCons = new URL(this.state.urlTxtCons);
            let apiURLLib = new URL(this.state.urlTxtLib);
            // this.state.queries.forEach(query =>
            //     apiURLCons.searchParams.append(query.key, query.value)
            // );
            // apiURLCons.searchParams.append("q", this.state.contentTopic);
            // console.log("url on update: " + this.state.url);
            // if (this.state)
            apiURLCons.searchParams.append("topic", this.state.contentTopic);
            apiURLLib.searchParams.append("topic", this.state.contentTopic);
            fetch(apiURLCons)
                .then(response => response.json())
                .then(data =>
                    this.setState({
                        totalResults: data.totalResults,
                        loading: false,
                        consArticles: data.articles
                    })
                );

            // this.state.queries.forEach(query =>
            //     apiURLLib.searchParams.append(query.key, query.value)
            // );
            // apiURLLib.searchParams.append("q", this.state.contentTopic);
            // console.log("url on update: " + this.state.url);
            fetch(apiURLLib)
                .then(response => response.json())
                .then(data =>
                    this.setState({
                        totalResults: data.totalResults,
                        loading: false,
                        libArticles: data.articles
                    })
                );
        }
    };

    render() {
        // console.log(this.state.articles);
        // console.log(req.url + "&q=" + this.props.topic);
        let topic = this.props.topic;

        // }
        const loading = this.state.loading;
        if (loading) {
            return (
                <ReactGrid
                    container
                    justify="center"
                    alignContent="center"
                    alignItems="center"
                    style={{ padding: 200, color: "#5F4BB6" }}
                >
                    <CircularProgress />
                </ReactGrid>
            );
        }
        console.info("here");
        return (
            <React.Fragment>
                <TitleComponent topic={topic} />
                <Grid container justify="center" alignContent="flex-start">
                    <MediaQuery query="(max-device-width: 480px)">
                        <div key={Math.random() * 100}>
                            {this.state.libArticles && this.state.consArticles && (
                                <MobileContent
                                    cArticles={this.state.consArticles}
                                    lArticles={this.state.libArticles}
                                />
                            )}
                        </div>
                    </MediaQuery>

                    {/* NOTE: CERTAIN INFO WON'T APPEAR IF THE API DOES NOT RETURN A VALUE */}
                    <MediaQuery query="(min-device-width: 1224px)">
                        {this.state.libArticles && (
                            <ArticleStream
                                articleData={this.state.libArticles}
                                streamSide="L"
                            />
                        )}

                        {this.state.consArticles && (
                            <ArticleStream
                                articleData={this.state.consArticles}
                                streamSide="C"
                            />
                        )}
                    </MediaQuery>
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
