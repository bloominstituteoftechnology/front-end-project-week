import React, { Component } from 'react';
import Sidebar from './Sidebar';
import NoteGrid from '../components/NoteGrid';
import NewNote from '../components/NewNote.js';
import NoteFull from '../components/NoteFull.js';
import EditNote from '../components/EditNote.js';
import Search from '../components/Search.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import WebFont from 'webfontloader';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container flex-column flex-md-row d-flex">
          <Sidebar />
          <div className="col-md-9 col-sm-12 main-content container-fluid align-items-center">
            <Route path="/" exact component={Search} />
            <Route path="/" exact component={NoteGrid} />
            <Route path="/new-note" component={NewNote} />
            <Route path="/view-note/:id" component={NoteFull} />
            <Route path="/edit/:id" component={EditNote} />
          </div>
        </div>
      </Router>
    );
  }
}
WebFont.load({
  google: {
    families: ['Raleway:400', 'Roboto:700', 'sans-serif']
  }
});
export default App;
