import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import App2 from './App2';
import * as serviceWorker from './serviceWorker';
import { Router, Route, IndexRoute } from 'react-router';
import './styles/text.css';

import axios from 'axios';

let isLoggedIn = false;

if (isLoggedIn) {
  ReactDOM.render(<App />, document.getElementById('root2'));
} else {
  ReactDOM.render(<App />, document.getElementById('root'));
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
