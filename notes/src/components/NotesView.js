import React, { Component } from "react";
import NotesList from './NotesList';
import '../App.css'


export default class NotesView extends Component {
  constructor(props) {
    super(props);
    this.state = {
        notes: this.props.notes,
    };
  }

  
  render() {
      
    return (
      <div className="notesview">
        <div className="notesview-title"> Your Notes:</div>
        
        <div className="noteslist-group">  
            <NotesList  notes={this.state.notes}/>
        </div>
      </div>
    );
  }
}
