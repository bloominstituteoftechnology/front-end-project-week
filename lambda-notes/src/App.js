import React, { Component } from 'react';

import './App.css';

import Sidebar from "./Components/Sidebar";
import MainSection from "./Components/MainSection";


class App extends Component {
  render() {
    return (



      <div className='Container'>

        <Sidebar/>

        <MainSection/>

      </div>


    );
  }
}

export default App;
