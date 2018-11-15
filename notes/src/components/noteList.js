import React, { Component } from 'react';
import axios from "axios";
import "../css/note.css"
import Note from './note'

class NoteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
		notes: [],
		tags: '',
		title: '',
		textBody: '',
      id: '',
    };
  }
	
	componentDidMount() {
		axios
		  .get('https://fe-notes.herokuapp.com/note/get/all')
		  .then(response => {
			this.setState(() => ({ notes: response.data }));
			console.log("made it to axios get")
			console.log("notes:", this.state.notes)
		  })
		  .catch(error => {
			console.error('Server Error', error);
		  });
	  }
	
	
	
	render() {
	
	return (
		<div className="note-list"><div className="list-title">Your Notes:</div>
		<div className="list-container">
			 {this.state.notes.map((note, index) => {
        return <Note key={index} title={note.title} textBody={note.textBody} _id={note._id} noteView={this.props.noteView} notes={this.state.notes}/>
     } ) }
				  
		</div>
		</div>
	);
}
};

export default NoteList;