import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from './App';
import CreateNote from './components/CreateNote';


const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/CreateNote/" component={CreateNote} />
      
    </Switch>
  </BrowserRouter>
);

export default Router;