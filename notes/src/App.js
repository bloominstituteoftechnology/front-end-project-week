import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import NoteList from './Components/NoteList';
import NewNote from './Components/NewNote';
import ViewNote from './Components/ViewNote';
import EditNote from './Components/EditNote';
import DeleteModal from './Components/DeleteModal';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Sidebar />
      <NoteList />
      <NewNote />
      <ViewNote />
      <EditNote />
      <DeleteModal />
      </div>
    );
  }
}

export default App;
