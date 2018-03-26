import React, { Component } from 'react';
import Note from '../Note/Note';

class ListNotes extends Component {
   
   render() {
      return (
         <div>
          {this.props.notes.map((note, i) => (
            <Note key={i} index={i} title={note.title} content={note.content} />
          ))}
         </div>
      )
   }
}


export default ListNotes;