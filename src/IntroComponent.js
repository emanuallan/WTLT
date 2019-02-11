import React from 'react';
import Button from '@material-ui/core/Button';

/* API URL for request */
// var url = 'https://newsapi.org/v2/top-headlines?' +
//     'q=abortion&' +
//     'apiKey=9e6c4875383b47c19201e7694edc4eb7';
// var req = new Request(url);

/* State Configuration */
export class IntroComponent extends React.Component {
    constructor(properties) {
        super(properties);
        this.state = {
            loading: false,

            selectedTopic: "abortion",
            totalResults: null,
            articles: undefined
        }
    }

    componentDidMount() {
        var req = new Request(`https://newsapi.org/v2/top-headlines?q=${this.state.selectedTopic}&apiKey=9e6c4875383b47c19201e7694edc4eb7`);
        fetch(req)
            .then(response => response.json())
            .then(data => this.setState({
                loading: false,

                totalResults: data.totalResults,
                articles: data.articles
            }));
    }

    componentDidUpdate() {
        if (this.state.loading) {
            var req = new Request(`https://newsapi.org/v2/top-headlines?q=${this.state.selectedTopic}&apiKey=9e6c4875383b47c19201e7694edc4eb7`);
            fetch(req)
                .then(response => response.json())
                .then(data => this.setState({
                    loading: false,

                    totalResults: data.totalResults,
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
                <div className="infoBox">
                    {/* NOTE: CERTAIN INFO WON'T APPEAR IF THE API DOES NOT RETURN A VALUE */}
                    {this.state.totalResults && <p>Amount of Results: {this.state.totalResults}</p>}
                    {this.state.articles && <p>Source: {this.state.articles[0].source.name}</p>}
                    {this.state.articles && <p>Article Title: {this.state.articles[0].title}</p>}
                    {this.state.articles && <p>Author: {this.state.articles[0].author}</p>}
                    {this.state.articles && <p>Description: {this.state.articles[0].description}</p>}
                    {this.state.articles && <p>published At: {this.state.articles[0].publishedAt}</p>}
                    {this.state.articles && <p>URL: {this.state.articles[0].url}</p>}
                </div>

                <Button variant="outlined" onClick={() => { this.setState({ selectedTopic: "immigration", loading: true }) }}> Immigration Info </Button>
            </React.Fragment>
        );
    }
}

export default IntroComponent;