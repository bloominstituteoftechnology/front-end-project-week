// Dependencies
import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
// CSS
// import logo from './logo.svg';
import './App.css';
// Components
import Navbar from './components/Navbar';
import NoteList from './components/NoteList';
import ViewNote from './components/Forms/ViewNote.js'

class App extends Component {
  render() {
    return (
      <div className="App container">
        <div className="row">
          <Navbar classes="col-md-3" />
          <div className="main-view col-md-9">
            <Switch>
              <Route exact path="/" component={NoteList} />
              <Route path="/note/:id" render={props => <ViewNote id={props.match.params.id} />} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

/* Code I might want to keep around
  <img src={logo} className="App-logo" alt="logo" />
*/