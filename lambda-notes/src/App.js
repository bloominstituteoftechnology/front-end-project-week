import React, { Component } from 'react';
import './App.css';
import { Route, Link } from "react-router-dom";
// import CreateNote from './components/CreateNote';
// import EditNote from "./components/EditNote";
// import Note from "./components/Note";
import SideBar from "./components/SideBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/' component={SideBar}/>
      </div>
    );
  }
}

export default App;
