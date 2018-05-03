import React, { Component } from 'react';
import './App.css';
import Main from './components/Main';
import SideBar from './components/SideBar';



class App extends Component {


  render() {
    return (
      <div className="App">
      <div>
        <h3>Lambda Notes</h3>
        <div>
          <SideBar/>
        </div>
      </div>
          <Main/>
      </div>
    );
  }
}

export default App;
