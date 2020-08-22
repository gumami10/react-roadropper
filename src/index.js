import 'assets/scss/material-kit-react.scss?v=1.8.0';

import { createBrowserHistory } from 'history';
import LandingPage from 'pages/LandingPage/LandingPage.js';
import LoginPage from 'pages/LoginPage/LoginPage.js';
import ProfilePage from 'pages/ProfilePage/ProfilePage';
import Detail from 'pages/Roadrop/Detail';
import ListRoadrop from 'pages/Roadrop/ListRoadrop';
import NewRoadrop from 'pages/Roadrop/NewRoadrop';
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
        <Route path="/new" component={NewRoadrop} />
        <Route path="/roadrops" component={ListRoadrop} />
        <Route path="/roadrop/:id" component={Detail} />
        <Route path="/" component={LandingPage} />
      </Switch>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
