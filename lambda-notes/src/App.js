import React, { Component } from 'react';
import './App.css';
import NoteList from './components/NoteList';
import CreateNewNote from './components/CreateNewNote';

class App extends Component {
    render() {
        return (
            <div className="App">
              <div className="main">
                <div className="search">
                </div>
                <div className="sidepanel">
                <b>Lambda<br/>Notes</b><br/>
                <button> View Your Notes </button><br/>
                  <CreateNewNote />
                </div>
                <div className="notes">
                  <NoteList />
                </div>
              </div>
            </div>
        );
    }
}

export default App;