import React from 'react';
import ReactDOM from 'react-dom';
import IntroComponent from "./IntroComponent"
import './style/style.css';
import Header from "./Header"
import TitleComponent from './TitleComponent';

const Index = () => (
    <React.Fragment>
        <Header />
        <TitleComponent />
        <IntroComponent />
    </React.Fragment>
);

ReactDOM.render(<Index />, document.getElementById('root'));

