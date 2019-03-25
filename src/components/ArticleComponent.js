import React from "react";
import Moment from "moment";
import logo from "../assets/logo.jpg";
import classnames from "classnames";
import {
    Card,
    CardHeader,
    CardMedia,
    Typography,
    IconButton,
    Collapse,
    CardContent,
    CardActions
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";

let styles = theme => ({
    card: {
        width: 550,
        marginBottom: "50px"
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
    },
    actions: {
        display: "flex"
    },

    libContainer: {
        backgroundColor: "rgba(51,102,255,0.5)" /*"#ba1f1f"*/
    },

    consContainer: {
        backgroundColor: "rgba(186,31,31,0.5)"
    }
});

class ArticleComponent extends React.Component {
    state = { expanded: false };

    handleExpandClick = () => {
        this.setState({ expanded: !this.state.expanded });
    };

    render() {
        Moment.locale("en");
        let image = this.props.article.urlToImage;
        let author;
        if (!this.props.article.author || this.props.article.author.length <= 0) {
            author = this.props.article.source.name;
        } else {
            author =
                this.props.article.author + " for " + this.props.article.source.name;
        }

        if (!image || image.length <= 0) {
            image = logo;
        }
        let { classes } = this.props;

        let isLib = this.props.side === "L";
        let sideColorClass;
        if (isLib) {
            sideColorClass = classes.libContainer;
        } else {
            sideColorClass = classes.consContainer;
        }

        return (
            <Card
                className={classnames(classes.card, sideColorClass)}
                data-aos="fade-up"
            >
                <CardHeader
                    title={this.props.article.title}
                    subheader={author}
                    action={
                        <IconButton>
                            <MoreVertIcon />
                        </IconButton>
                    }
                />
                <CardMedia
                    className={classes.media}
                    image={image}
                    title="Article Image"
                />
                <CardActions className={classes.actions} disableActionSpacing>
                    <IconButton>
                        <ShareIcon />
                    </IconButton>

                    {/* Keep Reading */}
                    <IconButton onClick={_ => window.open(this.props.article.url)}>
                        <OpenInNewIcon />
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
                </CardActions>

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
