import React, { Component } from 'react';
//import axios from "axios";
import "../css/note.css"
import { connect } from 'react-redux';
import { viewNote } from '../actions';
//import { deleteNote } from '../actions';

class NoteView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      tags: '',
      title: '',
      textBody: '',
      _id: '',
      selected: null,
    };
  }

  componentDidMount() {
  
 
    this.props.viewNote(this.props.id)
    
  console.log("this.state", this.state)
  
  }
 /*  noteDelete = (e) => {
    e.preventDefault();
    const URL = 'https://fe-notes.herokuapp.com/note/delete/' + this.props.id;
    axios
      .delete(URL)
      .then(response => {
        this.setState(() => ({ notes: response.data }));
      })
      .catch(error => {
        console.error('Server Error', error);
      });
  } */

  render() {
    return (
      <div className="note-view"> <div className="note-view-container">
        <div className="spacer"></div>
        <button className="edit-button" onClick={() => this.props.noteEdit(this.props.id)}>edit</button>
        <button className="delete-button" onClick={() => this.props.noteDelete(this.props.id)}>delete</button></div>
       <div className="note-name">{this.props.noteSelected.title}</div> 
       <div className="note-body">{this.props.noteSelected.textBody}</div> 
      </div>
    )
  };
}

const mapStateToProps = state => {
	const { singleNoteReducer } = state;
	return {
	 // deletingNote: state.notesReducer.deletingNote,
	  error: state.notesReducer.error,
	 // showUpdate: state.singleNoteReducer.showUpdate,
	  noteSelected: state.singleNoteReducer.noteSelected
	 /* notes: notesReducer.notes, */
	/*  error: notesReducer.error, */
	
	};
  };
  
  export default connect(mapStateToProps, {
	/* deleteNote, */
/* 	updateSingleNote, */
	/* toggleShowUpdate, */
	viewNote 
  })(NoteView);