import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import notesTest from './components/notes'
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      
      <div className="App">
      <div className="leftSide">
        <h1 className= "leftSideH1">Lambda Notes</h1>
        <Link to={"/"} className="leftButtons">
         View Your Notes
        </Link>
        <Link to={"/create"} className="leftButtons">
         +Create New Note
        </Link>
      </div>
      <Route exact path="/"/>

      </div>
    );
  }
}

export default App;
