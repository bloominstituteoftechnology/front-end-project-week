import React, { Component } from 'react';


import './App.css';

// Component Imports
import SideBar from './components/sidebar/SideBar'
class App extends Component {

  constructor(){
    super();
    this.state = 
    {

    }
  }

  componentDidMount(){
    //will fetch data from the api
  }

  render() {
    return (
      <div className="App">
        <h1>Still working</h1>
        <SideBar />
      </div>
    );
  }
}

export default App;
