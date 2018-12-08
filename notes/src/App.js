import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import NotesContainer from './containers/NotesContainer';
import Note from './components/Note';
import NoteForm from './components/NoteForm';

const App = () => {
  return (
    <div className="App">
      <h1 style={{display: 'inline'}}>Lambda Notes</h1>
      <Route path="/" component={NavBar} />
      {/*create Routes here*/}
      <Route path="/notes" component={NotesContainer} />
      <Route path="/note/:id" component={Note} />
      <Route path="/create" component={NoteForm} />
      <Route path="/edit/:id" component={NoteForm} />
    </div>
  );
};
export default App;
