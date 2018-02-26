//base imports
import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router";
import './styles/App.css';

//components
/*
import Home from "./components/home/home";
import Menu from "./components/menu/menu";
import NewNote from "./newNote/newNote";
import EditNote from "./editNote/editNote";
import DeleteNote from "./deleteNote/deleteNote";
*/

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return (
      <div className="App">
        <h1>Testeroo</h1>

      </div>
    );
  }
}

export default App;
