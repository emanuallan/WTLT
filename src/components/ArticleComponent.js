import React from "react";
import Moment from "moment";
import logo from "../assets/logo.jpg";
import Grid from "@material-ui/core/Grid";
import { Card, CardHeader, CardMedia, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const styles = theme => ({
    card: {
        maxWidth: 400,
        margin: "1%"
    },
    media: {
        height: 0,
        paddingTop: "56.25%" // 16:9
    }
});

class ArticleComponent extends React.Component {
    render() {
        Moment.locale("en");
        var date = this.props.article.publishedAt;
        var author = this.props.article.author;
        var image = this.props.article.urlToImage;
        if (!author || author.length <= 0) {
            author = "an unnamed journalist at " + this.props.article.source.name;
        }

        if (!image || image.length <= 0) {
            image = logo;
        }
        let { classes } = this.props;
        return (
            // <a href={props.article.url} rel="noopener noreferrer" target="_blank">
            //     <div className={"news-container " + props.className}>
            //         <Grid container>

            //             <Grid item xs={4}>
            //                 <img src={image} alt="newsImage" className="center"></img>
            //                 <p style={{ fontSize: "280%", textAlign: "left", margin: "0px", marginTop: "5%" }}><b>{props.article.source.name}</b></p>
            //             </Grid>

            //             <Grid item xs={8}>
            //                 <h2 className="raisedbox" style={{ marginLeft: "17%", fontSize: "150%" }}>{props.article.title}</h2>
            //                 <p className="raisedbox" style={{ marginLeft: "34%", padding: "5px", fontSize: "95%" }}> {props.article.description}</p>
            //                 <p className="right" style={{ borderTop: "1px solid white", marginLeft: "10%" }}>Written by {author}</p>
            //                 <p className="right">{Moment(date).format('LLL')}</p>
            //             </Grid>

            //             {/* <p><a href={props.article.url}>{props.article.url}</a></p> */}

            //         </Grid>
            //     </div>
            // </a >

            <Card className={classes.card}>
                <CardHeader
                    title={
                        // <Typography variant="display1">
                        this.props.article.title
                        // </Typography>
                    }
                    subheader={author}
                />
                <CardMedia className={classes.media} image={image} title="the image" />
            </Card>
        );
    }
}

ArticleComponent.propTypes = {
    classes: PropTypes.object.isRequired
};

const ArticleComponentE = withStyles(styles)(ArticleComponent);
export default ArticleComponentE;
