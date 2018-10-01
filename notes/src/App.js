import React from 'react';
import {Route} from 'react-router-dom';
import {Navigation, NotesList, CreateNote} from './Components';
import './App.css';

const App = () => (
      <div className="App">
      <Navigation />
    
      <Route exact path='/' component={NotesList}
      />
      <Route exact path='/create' component={CreateNote}
      /> 
      </div>
    );

export default App;
