import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummyData';
import NoteDisplay from "./components/NoteDisplay";
import LeftColumnPanel from "./components/LeftColumnPanel";
import newNote from "./components/newNote";
import axios from 'axios';

class App extends Component {
	constructor() {
		super();
		this.state = {
    notes: [], 
    notes: dummyData, 
		 newNote: {
      NoteTitle: '',
			NoteContent: '',					 
	 },
   updateIndex: null,			 
};
}	
  render() {
    return (
			<div>	
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React </h1>
        </header>
				  <LeftColumnPanel />
				  <div className="Notes"> 	
				  <h3 className="Note-title"> Your Notes: </h3>
          {this.state.notes.map((note, i) => {
							return (
				      <NoteDisplay key={i} notetitle={note.Title} noteContent={note.Content} />
						);
					})}	
      </div>
		 </div>
		 <newNote updateNoteTitle={this.updateNoteTitle} updateNoteContent={this.updateNoteContent}
		    onSave={this.saveRequest} />
		  </div> 
    );
  }

componentDidMount() {
	axios.get('http://localhost:5000/front-end-project/')
		.then((response) => {
				this.setState({
					Notes: response.data,
					newNotes: this.state.newNotes,
					updateIndex: null,
				});
			})
	    .catch((error) => {
					alert('There was an error: ', error);
					return;
			});
	}

updateNoteTitle = (event) => {
	this.setState({
    notes: this.state.notes,
	  newNote: {
		  NoteTitle: event.target.value,
			NoteContent: this.state.newNote.NoteContent,
		},
    updateIndex: this.state.updateIndex,
	});
};

updateNoteContent = (event) => {
	this.setState({
		notes: this.state.notes,
		newNote: {
		  NoteTitle: this.state.newNote.NoteTitle,
			NoteContent: event.target.value,
		},
    updateIndex: this.state.updateIndex,
	});
};
}
export default App;
