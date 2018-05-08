import React, { Component } from 'react';

import './App.css';
import Nav from "./Nav/Nav.js";
import ListView from "./Components/ListView.js";
import CreateNote from "./Components/CreateNote.js";
import { NavLink, Switch, Link, Route } from "react-router-dom";





class App extends Component {
  render() {
    return <div className="AppContainer">
        <Nav />
        {/* <ListView/> */}
        <Switch>
          <Route exact path="/" component={ListView} />
          <Route exact path= "/create" component={CreateNote}/>
          {/* <Route exact path="/create" component={Create} /> */}
        </Switch>
      </div>;
  }
}



export default App;
