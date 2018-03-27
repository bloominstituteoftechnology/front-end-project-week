import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ViewNotes from './components/ViewNotes';
import CreateNote from './components/CreateNote';



const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ViewNotes} />
      <Route path="/CreateNote/" component={CreateNote} />
      
      
    </Switch>
  </BrowserRouter>
);

export default Router;
