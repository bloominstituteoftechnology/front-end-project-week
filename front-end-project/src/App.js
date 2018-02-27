import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummyData';
import NoteDisplay from "./components/NoteDisplay";

class App extends Component {
  
	constructor() {
		super();
		this.state = {
		 notes: dummyData 
	 };
}
	render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React </h1>
        </header>
				  <h2 className="App-title"> Lambda Notes </h2>
					  <button type="button">View Your Notes</button><br />
						<button type="button">+ Create New Note</button>
						
				  <h3 className="App-title"> Your Notes: </h3>
          {this.state.notes.map((note, i) => {
							return (
				      <NoteDisplay key={i} notetitle={note.Title} noteContent={note.Content} />
						);
					})}	
      </div>
    );
  }
}

export default App;
