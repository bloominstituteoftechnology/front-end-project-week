import React, { Component } from 'react';
import Note from './Note';
import '../index.css';

class Notes extends Component {
  ellipsis = (str) =>{
    return (str.length > 150 ? str.slice(0, 150) + ' ...' : str)
  }
  render() {
    return (
      <div className="container" >
        <h2 className="noteheadline">Your Notes:</h2>
        <div className="notes">

          {this.props.notes.map(note => {
            return (
              <div className="notePreview">
              <Note className="note"
                title={note.title}
                id={note._id}
                text={this.ellipsis(note.textBody)}
                key={note._id}
              />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}


export default Notes;
