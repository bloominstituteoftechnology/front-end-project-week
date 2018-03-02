import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import List from './components/List';
import Note from './components/Note';
import Create from './components/Create';
import Edit from './components/Edit';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App" id="App">
          <div className="left-panel">
            <h1 className="left-panel__heading">
              Lambda
              <br />
              Notes
            </h1>
            <Link to="/">
              <div className="left-panel__button left-panel__view-button">View Your Notes</div>
            </Link>
            <Link to="/create">
              <div className="left-panel__button left-panel__create-button">+ Create New Note</div>
            </Link>
          </div>
          <div className="container">
            <Route path="/" component={List} exact />
            <Route path="/notes/:id" component={Note} toggleDeleteModal={this.toggleDeleteModal}
              processDelete={this.processDelete} />
            <Route path="/create" component={Create} />
            <Route path="/edit/:id" component={Edit} />
          </div>
          <div className="opaque-shield" id="opaque-shield" />
        </div>
      </Router>
    );
  }
}

export default App;
