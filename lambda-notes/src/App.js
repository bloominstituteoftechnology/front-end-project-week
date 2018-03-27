import React, { Component } from 'react';
import './App.css';
import allNotes from './dummyData';
import NotesList from './components/NotesList';
import CreateNote from './components/CreateNote';
import NavBar from './components/NavBar';


class App extends Component {
  constructor() {
    super();
    this.state = {
      neededData: [],
    }
  }

  componentDidMount() {
    this.setState( {neededData: allNotes} );
  }
  

  render() {
    return (
      <div className="Lambda Notes App">
        <NavBar /> 
        
        <div className="NoteItems_Header">
          <h2>You're Notes:</h2>
          {this.state.neededData.map(((notes, index) => <NotesList notes={notes} key={index} /> ))}
        </div>
        <CreateNote />
      </div>

    );
  }
}
export default App;
