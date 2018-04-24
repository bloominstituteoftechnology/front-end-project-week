import React, { Component, Fragment } from 'react';
import './App.css';
import {notes} from '../notes/notes.js';
import Notes from "./ListView"
import Home from "./Home"
class App extends Component {
  constructor(){
    super();
    this.state={
      notes:[]
    };
  }
  componentDidMount(){
    this.setState({ notes: notes});
    console.log(this.state)
   }

  render() {
    console.log(this.state)
    return (

      <div className="App">
      <Home/>
      <div className="container-styles">    
          <Notes  notes={this.state.notes}/>
      </div>
      </div>
    );
  }
}

export default App;
