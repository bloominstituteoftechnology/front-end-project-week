import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NewNote from './NewNote';

ReactDOM.render(
<Router>
    <div>
    <Route exact path="/" component={ App } />
    <Route path="/New" component={ NewNote } />
    </div>

</Router>, 
document.getElementById('root'));

