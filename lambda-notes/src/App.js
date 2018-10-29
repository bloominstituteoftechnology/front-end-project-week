import React, { Component } from 'react';
import './App.css';
import {Route} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path ='/' component='NotesList'></Route>
      </div>
    );
  }
}

export default App;
