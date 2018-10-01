import React from 'react';
import {Route} from 'react-router-dom';
import {Navigation, NotesList, CreateNote} from './Components';
import './App.css';

const App = () => (
      <div className="App">
      <NotesList />
      {/* <Navigation />
    
      <Route exact path='/note' component={NotesList}
      />
      <Route exact path='/note/create' component={CreateNote}
      /> */}
      </div>
    );

export default App;
