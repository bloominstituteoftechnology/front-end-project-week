import React, { Component } from 'react';
import { Route } from "react-router-dom";
import './App.css';

import Sidebar from "./Components/Sidebar";
import MainSection from "./Components/MainSection";
import NewNote from "./Components/NewNote";
import ViewNote from "./Components/ViewNote";
import EditNote from "./Components/EditNote";


class App extends Component {
  render() {
    return (



      <div className='Container'>

        <Route path="/" component={Sidebar} />

        <Route exact path="/" component={MainSection} />

        <Route path="/newnote" component={NewNote} />

        <Route path="/note/:id" component={ViewNote} />

        <Route path="/edit/:id" component={EditNote} />

      </div>


    );
  }
}

export default App;
