import React from 'react';
import { Route, Switch} from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import List from './Components/List/List';
import NoteView from './Components/NoteView/NoteView';
import EditNote from './Components/EditNote/EditNote';
import CreateNote from './Components/CreateNote/CreateNote';

const Root = () => (
    <Router>
        <Switch>
            <Route exact path = '/' component = {List}/>
            <Route exact path='/list' component={List}/>
            <Route path='/list/:id' component={NoteView}/>
            <Route exact path = '/edit' component ={EditNote}/>
            <Route exact path = '/create' component = {CreateNote}/>
        </Switch>
      </Router>
  )

export default Root;

