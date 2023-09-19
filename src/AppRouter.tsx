import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import StartPage from './components/StartPage/StartPage';
import MainPage from './components/MainPage/index';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={StartPage} />
        <Route path="/main" component={MainPage} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
