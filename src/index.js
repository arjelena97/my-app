import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import FirstPage from './FirstPage';

ReactDOM.render(
<Router>
    <Route path="/FirstPage" component={FirstPage} />
    <Route path="/" component={App} />
</Router>,

document.getElementById('root')

);