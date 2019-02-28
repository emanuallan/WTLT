import React from "react";
import ReactDOM from "react-dom";
import HomePage from "./pages/HomePage";
import store from "./redux/store";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import "./style/style.css";

const Index = () => (
    <Provider store={store}>
        {/* <Router>
            <React.Fragment>
                <HomePage />
            </React.Fragment>
        </Router> */}
        <AppRouter />
    </Provider>
);

ReactDOM.render(<Index />, document.getElementById("root"));
