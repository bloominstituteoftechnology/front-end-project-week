import React, { Component } from 'react';
import NavBar from './components/app/NavBar' ;
import './App.css';
import Content from './components/app/Content' ;
//import dummyData from './components/app/dummyData' ;
import NotesList from './components/notes/NotesList';

class App extends Component {
  constructor() {
    super() ;
    this.state = {
      tristan: [],  
    } ;
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <nav className="nav">
            <NavBar             
                myProps={this.state}
              />
          </nav>
          <div className="page">
            <Content />
          </div>
        </div>        
      </div>
    );
  }
}
export default App;
