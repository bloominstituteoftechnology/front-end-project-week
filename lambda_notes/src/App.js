import React, { Component } from 'react';
import '../src/App.css';
import { Router } from "react-router-dom";
import ListView from './components/Display_Components/ListView';
import CreateNewNote from './components/Display_Components/CreateNewNote';

class App extends Component {



  render() {



    return (
      <div className="App">
       
        <ListView path="/" exact />
        <CreateNewNote path="/create"/>
      </div>
    );
  }
}

export default App;
