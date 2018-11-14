import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'; 
import Notes from './components/Notes'; 
import {Route} from 'react-router-dom'; 
import { CreateNew } from './components/CreateNew'

class App extends Component {
  constructor(){
    super(); 
  }

  render() {
    return (
      <div className="App">
        <div className="sidebar-container">
          <Sidebar />
        </div> 
        <div className="notes-container">
          <Route exact path='/' component={Notes} />
          <Route path='/CreateNew' component={CreateNew}/>   
        </div> 
      </div>
    );
  }
}

export default App;
