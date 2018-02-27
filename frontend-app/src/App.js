import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Note from './components/Note';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';


class App extends Component {
  nextId = 4;
  state = {
    notes: [
      {
        id: 1,
        title: 'Note Title Filler',
        content: 'content content content content content content content content'
      },
      {
        id: 2,
        title: 'Note Title Filler',
        content: 'content content content content content content content content'
      }
    ]
    
  }
  render() {


    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Note App</h1>
            <NavLink to="/" activeClassName="navlink--active" exact>
            View Notes
            </NavLink>
            <NavLink to="/" activeClassName="navlink--active" exact>
            + Create New Note
            </NavLink>
            <button>
              
            </button>
          </header>

          <ul>
            {this.state.notes.map(note => {
              return (
                <Note 
                  key={note.id}
                  note={note}
                />
              )
            })}
          </ul>
          
        </div>
      </Router>
    );
  }
}

export default App;
