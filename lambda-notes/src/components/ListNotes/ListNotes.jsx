import React, { Component } from 'react';
import Note from '../Note/Note';
import './ListNotes.css';

class ListNotes extends Component {
   
   render() {
      return (
         <div className="yourNotes">
         <h2> Your Notes:</h2>
         <div className="noteList"> 
          {this.props.notes.map((note, i) => (
            note.title ? 
            (<Note key={i} index={i} title={note.title} content={note.content} />)
            : (null)
          ))}
          </div>
         </div>
      )
   }
}


export default ListNotes;