import React, { Component } from 'react';
import './App.css';
import {Route, Link} from 'react-router-dom';
import SideBar from './components/sidebar'
import NoteView from './components/NoteView';



class App extends Component {


  render() {
    return (
      <div className="App">
     
      <SideBar/> 
       <Route exact path="/" 
      render={props => <NoteView {...props}/>}
      />
      </div>
    );
  }
}

export default App;
