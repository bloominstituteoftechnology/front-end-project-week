import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';
import './App.css';
import Child from './Components/NoteView';

import AddNote from './Components/AddNote';
import Notes from './Components/Notes';


class App extends Component {
 

  render() {
    return (
      
      <div className="App" >
      <br /><br /><br />
      <Link to="/"><button> View Your Notes </button></Link>
      <Link to="AddNote"><button> + Create New Note </button></Link>
      <Route exact path="/" component ={Notes} />
      <Route exact path="/AddNote" component={AddNote} />
      <Route exact path={"/:id"} component={Child}/>  

  
      
        
        
      </div>
    );
  }
}







export default App;
