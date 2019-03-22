import React from "react";
import Moment from "moment";
import logo from "../assets/logo.jpg";
import Grid from "@material-ui/core/Grid";
import classnames from "classnames";
import {
    Card,
    CardHeader,
    CardMedia,
    Typography,
    Avatar,
    IconButton,
    Collapse,
    CardContent
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

let styles = theme => ({
    card: {
        maxWidth: 400,
        marginBottom: "10px"
    },
    media: {
        height: 0,
        paddingTop: "56.25%" // 16:9
    },
    expand: {
        transform: "rotate(0deg)",
        marginLeft: "auto",
        transition: theme.transitions.create("transform", {
            duration: theme.transitions.duration.shortest
        })
    },
    expandOpen: {
        transform: "rotate(180deg)"
    }
});

class ArticleComponent extends React.Component {
    state = { expanded: false };

    handleExpandClick = () => {
        this.setState({ expanded: !this.state.expanded });
    };

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
        let avatarColor;
        if (this.props.side === "L") {
            avatarColor = { backgroundColor: "#60afff" };
        } else {
            avatarColor = { backgroundColor: "#ba1f1f" };
        }
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
                    avatar={
                        <Avatar aria-label="political-side" style={avatarColor}>
                            {this.props.side}
                        </Avatar>
                    }
                    action={
                        <IconButton>
                            <MoreVertIcon />
                        </IconButton>
                    }
                />
                <CardMedia className={classes.media} image={image} title="the image" />
                <IconButton>
                    <ShareIcon />
                </IconButton>

                <IconButton
                    className={classnames(classes.expand, {
                        [classes.expandOpen]: this.state.expanded
                    })}
                    onClick={this.handleExpandClick}
                    aria-expanded={this.state.expanded}
                    aria-label="Show more"
                >
                    <ExpandMoreIcon />
                </IconButton>

                {/* Expand for the article description */}
                <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>
                            {this.props.article.description}
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        );
    }
}

ArticleComponent.propTypes = {
    classes: PropTypes.object.isRequired
};

const ArticleComponentE = withStyles(styles)(ArticleComponent);
export default ArticleComponentE;
