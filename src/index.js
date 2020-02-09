import 'assets/scss/material-kit-react.scss?v=1.8.0';

import { createBrowserHistory } from 'history';
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, Switch } from 'react-router-dom';
import Components from 'views/Components/Components.js';
import LandingPage from 'views/LandingPage/LandingPage.js';
import LoginPage from 'views/LoginPage/LoginPage.js';
import ProfilePage from 'views/ProfilePage/ProfilePage.js';
import Detail from 'views/Roadmap/Detail/Detail.js';
import NewRoadmap from 'views/Roadmap/New/NewRoadmap';

// pages for this product
var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/dash" component={ProfilePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/components" component={Components} />
      <Route path="/detail" component={Detail} />
      <Route path="/new" component={NewRoadmap} />
      <Route path="/" component={LandingPage} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
