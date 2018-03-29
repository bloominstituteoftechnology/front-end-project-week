import React, { Component } from 'react';
import Note from '../Note/Note';

class ListNotes extends Component {
   
   render() {
      return (
         <div className="yourNotes">
         <h2> {this.props.name}'s Notes:</h2>
         <div className="noteList"> 
          {this.props.notes.map((note, i) => (
            note.title ? 
            (<Note key={i} index={i} title={note.title} content={note.content} tags={note.tags}/>)
            : (null)
          ))}
          </div>
         </div>
      )
   }
}


export default ListNotes;