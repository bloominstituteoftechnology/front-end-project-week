import React, { Component } from 'react';
import Note from './Components/Note';
import './App.css';
import noteData from './data';
import Notes from './Components/Notes';
class App extends Component {
constructor(){
  super();
  this.state = {
    note: []
  };
}

componentDidMount(){
  this.setState({ note: noteData});
}

  render() {
       

    return (
      <div className="App">
        <Notes note={this.state.note}/>
      </div>
    );
  }
}

export default App;
