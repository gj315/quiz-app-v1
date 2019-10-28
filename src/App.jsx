import React from 'react';
import { render } from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import Main from 'Main';
import * as serviceWorker from './serviceWorker';

// App css
import './styles/app.css';

render(
    <Main />, 
    document.getElementById("root")
);
