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
          <h1 className="App-title">Lambda<br/>Notes</h1>
          <Button>View Your Notes</Button>
          <Button>+Create New Note</Button>
        </header>
          
        
        <div className="NoteItems">
          <h2>You're Notes:</h2>
          {this.state.neededData.map(((notes, index) => <NotesList notes={notes} key={index} /> ))}
        </div>
      </div>

    );
  }
}
export default App;
