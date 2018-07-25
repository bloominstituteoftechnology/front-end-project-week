import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from '../components/Header';
import NotesApp from '../components/NotesApp';

const AppRouter = () => (
  <BrowserRouter>
  <div>
  {/* Gives us the ability to have our header on every page */}
    <Header />
    <Switch>
    {/* {}setup component to reference a component we want to show */}
      <Route path="/" component={NotesApp} exact={true} />
      <Route path="/create" component={AddNote} />
    </Switch>
   </div> 
  </BrowserRouter>
);

export default AppRouter;