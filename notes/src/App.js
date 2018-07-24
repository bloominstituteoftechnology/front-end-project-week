import React, { Component } from 'react';
import Note from './Components/Note';
import './App.css';
import noteData from './data';
import Notes from './Components/Notes';
import Addnote from './Components/Addnote';


class App extends Component {
constructor(){
  super();
  this.state = {
    notes: [],
    note: {
      title: '',
      content: ''
    }
  };
}

componentDidMount(){
  this.setState({ notes: noteData});
}

  render() {
       

    return (
      <div className="App">
        <Notes 
        notes={this.state.notes}
        handleToggleComplete={this.toggleNoteComplete}/>
        <Addnote/>
        
      </div>
    );
  }
}

export default App;
