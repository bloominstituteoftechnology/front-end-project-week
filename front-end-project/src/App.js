import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummyData';
import NoteDisplay from "./components/NoteDisplay";
import LeftColumnPanel from "./components/LeftColumnPanel";
import newNote from "./components/newNote";
import axios from 'axios';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ViewNotes from './viewnotes';
//import Router from './Router'; 

class App extends Component {
	render() {
		return (
			<Router>
			<div className='App'>
      <Navigator />
			<Route path="/" component={ViewNotes} exact />
			<Route path="/viewnotes" component={ViewNotes} exact />
			<Route path="/createnote" component={CreateNote} exact />
			</div>
			</Router>
		);
  }
}

/*class App extends Component {
	constructor() {
		super();
		this.state = {
    notes: [], 
    notes: dummyData, 
/*		 newNote: {
      NoteTitle: '',
			NoteContent: '',					 
	 },
   updateIndex: null, 			 
};
} */
/*	render() {
    return (
			<div>	
       <Router>
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
//		 <newNote updateNoteTitle={this.updateNoteTitle} updateNoteContent={this.updateNoteContent}
//		    onSave={this.saveRequest} />
//		  </div>
 	    <Route path="/viewnotes" component={this.ViewNotes} exact />
		 </div>
		 </Router>
    );
  }

 ViewNotes = () => {
	 return (
			<div className="Home__Right">
			   Right
			</div>
		 )	
		};
 }*/
/*componentDidMount() {
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

toogleUpdate = (event) = {
	const index = Number(event.target.id.charAt(7));
	if (this.state.updateIndex === null) {
		this.setState({ 
      notes: this.state.notes,
			newNote: this.state.newNote,
			updateIndex: index,
		});
		const note = document.getElementById(`note-${index}`);
		note.classList.add('note update');
		const formHeader = document.getElementById('form-header');
    formHeader.classList.add('form-header-update');
  }*/


export default App;
