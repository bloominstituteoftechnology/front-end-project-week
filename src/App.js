import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import SideBar from './SideBar';
import CreateNote from './CreateNote';
import FullNote from './FullNote';
import Notes from './Notes';

class App extends Component {
  render() {
    return (
      <div className="App">
      <SideBar />

      <Route path="/create" component={CreateNote} />
      <Route path="/notes" component={Notes} />
      <Route path="/notes/:id" render={ props => <FullNote {...props} /> } />
      </div>
    );
  }
}

export default App;
