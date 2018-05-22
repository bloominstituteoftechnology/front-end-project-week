import React, { Component } from 'react';
import NoteCard from '../NoteCard/NoteCard';
import '../ListView/ListView.css';

class ListView extends Component {
  render(props){
  return (
    <div className="ListView">
       <h4 className="List-Header">Your Notes:</h4>
      {this.props.notes.map(note => (
        <NoteCard key={note.id} note={note}/>
      ))}
    </div>
  )}
}

export default ListView;