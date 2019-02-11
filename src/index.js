import React from "react";
import ReactDOM from "react-dom";
import HomePage from "./pages/HomePage";
import "./style/style.css";

const Index = () => (
    <React.Fragment>
        <HomePage />
    </React.Fragment>
);

ReactDOM.render(<Index />, document.getElementById("root"));
