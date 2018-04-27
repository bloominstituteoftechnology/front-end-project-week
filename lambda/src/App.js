import React from 'react';
import { Route } from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import CreateNewNote from './Components/CreateNewNote/CreateNewNote.js';
import ListView from './Components/ViewNote/ViewNote.js';
import NoteView from './Components/NoteView/NoteView.js';
import EditNote from './Components/EditNote/EditNote.js';

const App = () => {
  return (
      <div style={{display: 'flex'}}>
          <Route path='/' component={Nav} />
          <div className='left-container'>
            <Route exact path='/create-new-note' component={CreateNewNote} />
            <Route exact path='/' component={ListView} />
            <Route exact path='/notes/:id' component={NoteView} />
            <Route exact path='/notes/edit/:id' component={EditNote} />
          </div>
       </div>
     

  );
}

export default App;