import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './index.css';
import Week from './Week.js';
import Day from './Day.js';
import Month from './Month.js';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Link } from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/Week" exact={true} component={Week} />
<Route path="/Day" exact={true} component={Day} />
<Route path="/Month" exact={true} component={Month} />
        </Switch>
    </ BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
