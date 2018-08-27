import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [],

    }
  }

    


  render() {
    return (
      //Route NoteList
      //Route Note Form
      //Build Sidebar
      
      <div className="App">
        <div className="side-bar-container">
          <aside className="sidebar-left">
            Left Sidebar
          </aside>
        </div>
        <div className="notes-container">
          Body note content will go here
        </div>
        <Route>

        </Route>
      
      </div>
    );
  }
}

export default App;
