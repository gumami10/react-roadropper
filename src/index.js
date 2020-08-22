import 'assets/scss/material-kit-react.scss?v=1.8.0';

import { createBrowserHistory } from 'history';
import LandingPage from 'pages/LandingPage/LandingPage.js';
import LoginPage from 'pages/LoginPage/LoginPage.js';
import ProfilePage from 'pages/ProfilePage/ProfilePage.js';
import Detail from 'pages/Roadmap/Detail.js';
import ListRoadmap from 'pages/Roadmap/ListRoadmap';
import DetailRoadrop from 'pages/DetailRoadrop/DetailRoadrop';
import NewRoadmap from 'pages/Roadmap/NewRoadmap';
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, Switch } from 'react-router-dom';
import userService from 'services/userService';

var hist = createBrowserHistory();

const App = () => {
  React.useEffect(() => {
    userService.getStatus().subscribe();
  }, []);
  return (
    <Router history={hist}>
      <Switch>
        <Route path="/dash" component={ProfilePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/detail" component={Detail} />
        <Route path="/new" component={NewRoadmap} />
        <Route path="/roadrops" component={ListRoadmap} />
        <Route path="/roadrop/:id" component={DetailRoadrop} />
        <Route path="/" component={LandingPage} />
      </Switch>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
