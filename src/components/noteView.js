import React, { Component } from 'react';
import "../css/note.css"
//import axios from 'axios';
import { connect } from 'react-redux';
import { viewNote } from '../actions/notesActions';
import { createNote } from '../actions/notesActions';
//import noteList from './noteList';

class NoteView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      // tags: '',
      title: '',
      textBody: '',
      id: '',
      selectedFile: null,
    };
  }
  //"redux-logger": "^3.0.6",
  componentDidMount() {
    //console.log("this.props.id:", this.props.id)
    this.props.viewNote(this.props.id)
   // window.scrollTo(0, 0)
  }

  noteClone = () => {
    //	e.preventDefault();
    //	const { title, textBody, tags, _id, pictures, pictureDataURLs, users_id } = this.state;
    const title = this.props.noteSelected.title;
    const textBody = this.props.noteSelected.textBody;
    const _id = 1234;
    const tags = "";
    const users_id = 1;
    const pictures = this.props.noteSelected.pictures;
    const pictureDataURLs = this.props.noteSelected.pictureDataURLs;

    this.props.createNote({ title, textBody, tags, _id, pictures, pictureDataURLs, users_id });
    //this.setState({ tags: '', title: '', textBody: '', _id: "", pictures: "", pictureDataURLs: "", users_id: "" });
    this.props.noteList2();
  };

  render() {
    return (
      <form className="note-view"> <div className="note-view-container">
        <div className="spacer"></div>
        <button className="clone-button" onClick={this.noteClone}>clone</button>
        <button className="edit-button" onClick={() => this.props.noteEdit(this.props.id)}>edit</button>
        <button className="delete-button" onClick={() => this.props.noteDelete(this.props.id)}>delete</button></div>
        <div className="note-name">{this.props.noteSelected.title}</div>
        <div className="note-body">{this.props.noteSelected.textBody}</div>
       
      </form>
    )
  };
}

const mapStateToProps = state => {
  //const { singleNoteReducer } = state;
  return {
    error: state.notesReducer.error,
    noteSelected: state.singleNoteReducer.noteSelected
  };
};

export default connect(mapStateToProps, {
  viewNote, createNote
})(NoteView);