import React from "react";
import { Grid } from "@material-ui/core";
import ArticleComponent from "./ArticleComponent";

class ArticleStreamComponent extends React.Component {
    render() {
        return (
            <Grid
                container
                direction="column"
                justify="flex-start"
                alignContent="center"
                alignItems="center"
                item
                xs={6}
                style={{ marginTop: 5 }}
            >
                {this.props.articleData.map(art => (
                    <ArticleComponent
                        article={art}
                        side={this.props.streamSide}
                        key={this.props.articleData.indexOf(art)}
                    />
                ))}
            </Grid>
        );
    }
}

export default ArticleStreamComponent;
