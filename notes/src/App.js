import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import NotesList from './components/NotesList';
import CreateNote from './components/CreateNote';
import ViewNote from './components/ViewNote';
import Register from './components/Register';

const App = () => {
    return (
      <div className="App">
        <Route exact path='/' component={NotesList} />
        <Route exact path='/create' component={CreateNote} />
        <Route exact path='/notes/:id' component={ViewNote} />
        <Route exact path="/signup" component={Register} />
      </div>
    );
}

export default App;
