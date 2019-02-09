import React from 'react';
import ReactDOM from 'react-dom';
import IntroComponent from "./IntroComponent"
import './style/style.css';
// import Header from "./Header"

const Index = () => (
    <React.Fragment>
        <IntroComponent />
    </React.Fragment>
);

ReactDOM.render(<Index />, document.getElementById('root'));

