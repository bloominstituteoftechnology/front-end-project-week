import React, { Component } from "react";
import NotesList from './NotesList';
import '../App.css'


export default class NotesView extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  
  render() {
    return (
      <div className="notesview">
        <div className="notesview-title">Your Notes:</div>
        
        <div className="noteslist-group">  
    
            <NotesList  notes={this.props.notes}/>
    
        </div>
      </div>
    );
  }
}
