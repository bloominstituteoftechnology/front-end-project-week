import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NewNote from './NewNote';
import SaveNote from './SaveNote';
import EditNote from './EditNote';
import Login from './Login';
import Register from './Register';
import Forgot from './Forgot';

ReactDOM.render(
<Router>
    <div>
    <Route exact path="/" component={ App } />
    <Route path="/New" component={ NewNote } />
    <Route path="/Save:id" component={ SaveNote } />
    <Route path="/Edit" component={ EditNote } />
    <Route path="/Login" component={ Login } />
    <Route path="/Register" component={ Register } />
    <Route path="/Forgot" component={ Forgot } />
    </div>
</Router>, 
document.getElementById('root'));

