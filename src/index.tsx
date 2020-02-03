import React from "react";
import ReactDOM from "react-dom";
import {combineReducers, createStore, Reducer} from 'redux';
import {Provider} from 'react-redux'

import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/bootstrap-theme.min.css";
import "./assets/css/style.css";
import "./assets/css/media.css";
import "./index.css";
import App from "./App";
import {Router, Route, Link} from 'react-router-dom';
import history from './history';
import {rootReducers} from './reducers/rootReducers'
import {loginReducers} from './reducers/loginReducers'

import * as serviceWorker from './serviceWorker';

require('dotenv').config();


const store = createStore(rootReducers);
ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <App/>
        </Router>
    </Provider>,
    document.getElementById('root')
)
;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
