import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import FirstPage from './FirstPage';

ReactDOM.render(
  <Router>
  <Switch>
    <Route path="/FirstPage" component={FirstPage} />
    <Route path="/" component={App} />
  </Switch>
</Router>,

document.getElementById('root')

);