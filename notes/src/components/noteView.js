import React, { Component } from 'react';
import axios from "axios";
import "../css/note.css"


class NoteView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      tags: '',
      title: '',
      textBody: '',
      _id: '',
      select: null,
    };
  }

  componentDidMount() {
    const URL = 'https://fe-notes.herokuapp.com/note/get/' + this.props.id;

    axios
      .get(URL)
      .then(response => {
        this.setState(() => ({ notes: response.data }));
      })
      .catch(error => {
        console.error('Server Error', error);
      });

  }
  noteDelete = (e) => {
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
  }

  render() {


    return (
      <div className="note-view"> <div className="note-view-container">
        <div className="spacer"></div>
        <button className="edit-button" onClick={() => this.props.noteEdit(this.props.id)}>edit</button>
        <button className="delete-button" onClick={() => this.props.noteDelete(this.props.id)}>delete</button></div>
        <div className="note-name">{this.state.notes.title}</div>
        <div className="note-body">{this.state.notes.textBody}</div>
      </div>
    )
  };
}

export default NoteView;