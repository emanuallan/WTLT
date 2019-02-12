import React from "react";
import ReactDOM from "react-dom";
import HomePage from "./pages/HomePage";
import store from "./redux/store";
import { Provider } from "react-redux";
import "./style/style.css";

const Index = () => (
    <Provider store={store}>
        <React.Fragment>
            <HomePage />
        </React.Fragment>
    </Provider>
);

ReactDOM.render(<Index />, document.getElementById("root"));
