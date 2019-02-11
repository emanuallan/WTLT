import React from 'react';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

/* API URL for request */
var url = 'https://newsapi.org/v2/top-headlines?' +
    'country=us&' +
    'apiKey=9e6c4875383b47c19201e7694edc4eb7';
var req = new Request(url);

/* State Configuration */
export class IntroComponent extends React.Component {
    constructor(properties) {
        super(properties);
        this.state = {
            totalResults: null,
            loading: false,
            articles: undefined
        }
    }

    componentDidMount() {
        fetch(req)
            .then(response => response.json())
            .then(data => this.setState({
                totalResults: data.totalResults,
                articles: data.articles,
                loading: false
            }));
    }

    componentDidUpdate() {
        if (this.state.loading) {
            fetch(req)
                .then(response => response.json())
                .then(data => this.setState({
                    totalResults: data.totalResults,
                    loading: false,
                    articles: data.articles
                }));
        }
    }

    /* Rendering Configuration (doesn't work though there's no error in the Console) */
    render() {
        console.log("RENDER CALLED\nCURRENT AMOUNT OF RESULTS " + this.state.totalResults);
        console.log(this.state.articles);
        return (
            <React.Fragment>
                <Button variant="outlined" onClick={() => { this.setState({ loading: true }) }}> Load Info </Button>
                {/* NOTE: AUTHOR WON'T APPEAR IF THE API DOES NOT RETURN AN AUTHOR */}
                {this.state.articles && <p>{this.state.articles[1].author}</p>}
                {this.state.totalResults && <p>{this.state.totalResults}</p>}
            </React.Fragment>
        );
    }
}

export default IntroComponent;