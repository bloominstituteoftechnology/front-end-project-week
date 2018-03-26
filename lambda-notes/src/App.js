import React, { Component } from 'react';
import './App.css';
import { Button } from 'reactstrap';
import allNotes from './dummyData';
import NotesList from './components/NotesList';


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
        <header className="ToggleBar">
          <h1 className="App-title">Lambda Notes</h1>
        </header>
        <duv className="Buttons">
          <Button>View Your Notes</Button>
          <Button>+Create New Note</Button>
        </duv>
        <div classname="NoteItems">
          <header classname="NotesHeader">You're Notes:</header>
          {this.state.neededData.map(((notes, index) => <NotesList notes={notes} key={index} /> ))}
        </div>
      </div>

    );
  }
}
export default App;
