import 'assets/scss/material-kit-react.scss?v=1.8.0';

import { createBrowserHistory } from 'history';
import LandingPage from 'pages/LandingPage/LandingPage.js';
import LoginPage from 'pages/LoginPage/LoginPage.js';
import ProfilePage from 'pages/ProfilePage/ProfilePage.js';
import Detail from 'pages/Roadmap/Detail.js';
import NewRoadmap from 'pages/Roadmap/NewRoadmap';
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, Switch } from 'react-router-dom';

// pages for this product
var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/dash" component={ProfilePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/detail" component={Detail} />
      <Route path="/new" component={NewRoadmap} />
      <Route path="/" component={LandingPage} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
