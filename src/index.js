import React from "react";
import ReactDOM from "react-dom";
import store from "./redux/store";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import "./style/style.css";
import "./style/aboutstyle.css";

const Index = () => (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(<Index />, document.getElementById("root"));
