import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { getNotes } from './actions';
import { connect } from 'react-redux';
import Notes from './components/Notes';
import NewNote from './components/NewNote';
import SideBar from './components/SideBar';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'; 



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
        < Route exact path='/notes' component={Notes}/>
        < Route path='/new' component={NewNote} />

        
      </div>
    );
  }
}

export default App;
