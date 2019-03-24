import React from "react";
import ReactDOM from "react-dom";
import store from "./redux/store";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import "./style/style.css";
import "./style/aboutstyle.css";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
        fontFamily: ["Roboto Slab", "serif"].join(",")
    }
});

const Index = () => (
    <MuiThemeProvider theme={theme}>
        <Provider store={store}>
            <AppRouter />
        </Provider>
    </MuiThemeProvider>
);

ReactDOM.render(<Index />, document.getElementById("root"));
