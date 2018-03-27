import React, { Component } from 'react';
import './MainPage.css';
import RightSide from './RightSide'; 
import NewNote from './NewNote'
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'




class App extends Component {
  
  componentDidMount(){
    function ActionLink() {
      function handleClick(e) {
        e.preventDefault();
        console.log('The link was clicked.');
      }
  }

  render() {
    return (
      <div className="App">
        <div className='container'>
        <header className="App-header">
          <h1 className="App-title">Lambda Notes</h1>
          <button className='button'>
            View Your Notes
          </button>
          <button className='button' href='#' onClick={NewNote}>
            + Create New Note
          </button>
        </header>
        </div>
        <RightSide/>

      </div>
    );
  }
}

export default App;