import React, { Component } from 'react';
import { Route } from "react-router-dom";
import './App.css';

import Sidebar from "./Components/Sidebar";
import MainSection from "./Components/MainSection";
import NewNote from "./Components/NewNote";


class App extends Component {
  render() {
    return (



      <div className='Container'>

        <Route path="/" component={Sidebar} />

        <Route path="/home" component={MainSection} />

        <Route path="/newnote" component={NewNote} />

      </div>


    );
  }
}

export default App;
