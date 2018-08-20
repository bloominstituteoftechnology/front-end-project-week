import React, { Component } from "react";
import NotesList from './NotesList';
import '../App.css'

export default class NotesView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '', 
      note: '',

    };
  }
  render() {
    return (
      <div className="notesview">
        <div className="notesview-title">Your Notes:</div>

        <NotesList className="notesview-cardgroup" notes={this.props.notes}/>
      </div>
    );
  }
}
