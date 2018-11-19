import React, { Component } from 'react';
import axios from "axios";
import "../css/note.css"
import Note from './note'
//import SelectedNote from './selectedNote';
import { getNotes } from '../actions';
import { connect } from 'react-redux';
import { deleteNote, updateSingleNote, toggleShowUpdate } from '../actions';
//import UpdateNoteForm from './updateNoteForm';

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
		this.props.getNotes();
		/* axios
			.get('https://fe-notes.herokuapp.com/note/get/all')
			.then(response => {
				this.setState(() => ({ notes: response.data }));
			})
			.catch(error => {
				console.error('Server Error', error);
			}); */
	}

	handleDeleteNote = () => {
		const { id } = this.props.noteSelected;
		this.props.deleteNote(id);
	};

	handleShowNote = note => {
		this.props.updateSingleNote(note);
	};

	toggleShowUpdate = () => {
		this.props.toggleShowUpdate();
	};
	render() {
		return (
			<div className="note-list"><div className="list-title">Notes:</div>
				<div className="list-container">        
					{this.props.notes.map((note, index) => {
						return <Note key={index} title={note.title} viewNote={this.props.viewNote} textBody={note.textBody} _id={note._id} noteView={this.props.noteView} notes={this.state.notes} />
					})}

				</div>

			</div>
		);
	}
};
const mapStateToProps = state => {
	const { notesReducer } = state;
	return {
	 // deletingNote: state.notesReducer.deletingNote,
	  error: state.notesReducer.error,
	 // showUpdate: state.singleNoteReducer.showUpdate,
	 // noteSelected: state.singleNoteReducer.noteSelected
	 notes: notesReducer.notes,
	 error: notesReducer.error,
	 gettingNotes: notesReducer.gettingNotes
	};
  };
  
  export default connect(mapStateToProps, {
	deleteNote,
	updateSingleNote,
	toggleShowUpdate,
	 getNotes 
  })(NoteList);
//********************************************************* */
 /*  const mapStateToProps = state => {
	const { notesReducer } = state;
	return {
	  notes: notesReducer.notes,
	  error: notesReducer.error,
	  gettingNotes: notesReducer.gettingNotes
	};
  }; */
  
  /* export default connect(mapStateToProps, { getNotes })(App); */