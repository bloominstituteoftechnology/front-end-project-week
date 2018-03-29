// React and Router
import React from 'react';
import { Route } from 'react-router-dom';

// Components
import Nav from './components/Nav/Nav';
import CreateNewNote from './components/CreateNewNote/CreateNewNote';
import ListView from './components/ListView/ListView';
import NoteView from './components/NoteView/NoteView';
import EditNote from './components/EditNote';

const App = () => {
  return (
    
      <div style={{display: 'flex'}}>
          <Route path='/' component={Nav} />
          <Route exact path='/create-new-note' component={CreateNewNote} />
          <Route exact path='/' component={ListView} />
          <Route exact path='/notes/:id' component={NoteView} />
          <Route exact path='/notes/:id/edit' component={EditNote} />
       </div>
     

  );
} // end of App

export default App;
