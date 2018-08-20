import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom';

import './App.css';


class App extends Component {
  state = {
    atHome: true
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header>
            <div>
              <h1>Lambda Notes</h1>
            </div>
            <nav>
              <NavLink to="/notes">View Your Notes</NavLink> {/*route to notes container*/}
              {this.state.atHome ? null : <NavLink to="/notes/add-note">+Create New Note</NavLink>} {/*route to add note form container*/}
            </nav>
          </header>
        </div>
      </Router>
    );
  }
}

/*

// other links

/notes/:note-name - route to specific note container

/notes/:note-name/edit - route to edit note form container

*/

export default App;
