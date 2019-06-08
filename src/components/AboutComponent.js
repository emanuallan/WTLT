import React from "react";
import { Typography, Grid } from "@material-ui/core";

export class AboutComponent extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Grid alignContent="center">
                    <Typography variant="display2" align="center">
                        Your news, your way.
                    </Typography>
                    <Typography variant="body1" align="center">
                        There's more than one side to every story. With Purple Pundit,
                        you can get the latest news from every angle, so that you can
                        form an informed, insightful opinion. We don't have an agenda or
                        ulterior motives. Our only goal is to deliver today's most
                        relevant reporting from all sides of the aisle, in a fully
                        customizable format.
                    </Typography>
                </Grid>
            </React.Fragment>
        );
    }
}
