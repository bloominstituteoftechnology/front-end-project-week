import React, { Component } from 'react';
import './App.css';
import {notes} from '../notes/notes.js';
import Notes from "./ListView"
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
          <Notes  notes={this.state.notes}/>
      </div>
    );
  }
}

export default App;
