import React, { Component } from 'react';

import './App.css';
import Nav from "./Nav/Nav.js";
import ListView from "./Components/ListView.js";
import CreateNote from "./Components/CreateNote.js";
import NoteView from "./Components/NoteView.js";
import EditView from "./Components/EditView.js";
import { Switch, Route } from "react-router-dom";





class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { notes: [] };
  // }

  render() {
    return <div className="AppContainer">
        <Nav />
        {/* <ListView/> */}
        <Switch>
          <Route exact path="/" component={ListView} />
          <Route exact path="/create" component={CreateNote} />
          <Route path="/noteView/:id" component={NoteView} />
          <Route path="/editView/:id" component={EditView} />
        </Switch>
      </div>;
  }
}



export default App;
