import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CreateNew from './components/CreateNew';
import ViewList from './components/ViewList';
import Display from './components/Display';
import EditNote from './components/EditNote';




ReactDOM.render(
<Router>
    <div>  
        <Route exact path="/" component={App} />
        <Route path="/CreateNew" component={CreateNew} />
        <Route path= "/Display" component={Display} />
        <Route path= "/EditNote" component={EditNote} />
    </div>
</Router>
, document.getElementById("root"));
registerServiceWorker();
