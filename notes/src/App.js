import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import NewNote from './components/NewNote/NewNote';
import List from './components/List/List';
import NoteView from './components/NoteView/NoteView';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path='/' component={ List } />
          <Route path='/create' component={ NewNote } />
          <Route path='/view/:id' component={ NoteView } />
        {/* <div className="Sidebar-container">
          <div className="Side-title">Lambda Notes</div>
          <button name="button1" type="button">View Your Notes</button>
          <br />
          <button name="button2" type="button">+ Create New Note</button>
        </div>
        <div className="Notes-section-container">
          <div className="Notes-section-title">Your Notes:</div>
          <div className="Notes-container">
            <div className="Box Notes">
              <h1>Note Title</h1>
              <hr />
              <p>Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis ...</p>
            </div>
            <div className="Box Notes">
              <h1>Note Title</h1>
              <hr />
              <p>Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis ...</p>
            </div>
            <div className="Box Notes">
              <h1>Note Title</h1>
              <hr />
              <p>Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis ...</p>
            </div>
            <div className="Box Notes">
              <h1>Note Title</h1>
              <hr />
              <p>Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis ...</p>
            </div>
            <div className="Box Notes">
              <h1>Note Title</h1>
              <hr />
              <p>Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis ...</p>
            </div>
            <div className="Box Notes">
              <h1>Note Title</h1>
              <hr />
              <p>Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis ...</p>
            </div>
            <div className="Box Notes">
              <h1>Note Title</h1>
              <hr />
              <p>Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis ...</p>
            </div>
            <div className="Box Notes">
              <h1>Note Title</h1>
              <hr />
              <p>Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis ...</p>
            </div>
            <div className="Box Notes">
              <h1>Note Title</h1>
              <hr />
              <p>Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis ...</p>
            </div>
          </div>
        </div> */}
        </div>
      </Router>
    );
  }
}

export default App;
