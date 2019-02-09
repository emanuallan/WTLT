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




            /* Header Component */
            <React.Fragment>







                <div className="header-wrapper">
                    <Grid container>
                        <Grid item xs={12} style={{ marginTop: 5, marginRight: 5 }}>
                            <div className="header-top-menuContainer">
                                <Button variant="text" size="small" className="header-top-buttons" style={{ textTransform: 'none' }}> Home </Button>
                                <Button variant="text" size="small" className="header-top-buttons" style={{ textTransform: 'none' }}> Forum </Button>
                                <Button variant="text" size="small" className="header-top-buttons" style={{ textTransform: 'none' }}> Chat </Button>
                                <Button variant="text" size="small" className="header-top-buttons" style={{ textTransform: 'none' }}> About </Button>
                                <Button variant="text" size="small" className="header-top-buttons" style={{ textTransform: 'none' }}> FAQ </Button>
                                <Button variant="text" size="small" className="header-top-buttons" style={{ textTransform: 'none' }}> Contact Us </Button>
                            </div>
                        </Grid>

                        <Grid item xs={12} style={{ marginTop: 135 }}>
                            <div className="header-bottom-menuContainer">
                                <Button variant="text" className="header-bottom-buttons" style={{ textTransform: 'none' }}> Math </Button>
                                <Button variant="text" className="header-bottom-buttons" style={{ textTransform: 'none' }}> History </Button>
                                <Button variant="text" className="header-bottom-buttons" style={{ textTransform: 'none' }}> Writing </Button>
                                <Button variant="text" className="header-bottom-buttons" style={{ textTransform: 'none' }}> French </Button>
                                <Button variant="text" className="header-bottom-buttons" style={{ textTransform: 'none' }}> Science </Button>
                                <Button variant="text" className="header-bottom-buttons" style={{ textTransform: 'none' }}> Other </Button>
                            </div>
                        </Grid>
                    </Grid>
                </div>




                <Button variant="outlined" onClick={() => { this.setState({ loading: true }) }}> Load Info </Button>
                {this.state.articles && <p>{this.state.articles[1].author}</p>}
                {this.state.totalResults && <p>{this.state.totalResults}</p>}
            </React.Fragment>
        );
    }
}

export default IntroComponent;