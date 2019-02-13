import React, { Component } from 'react';
import Note from './Note';
import '../index.css';

class Notes extends Component {
  bodyellipsis = (str) => {
    return (str.length > 140 ? str.slice(0, 140) + ' ...' : str)
  }
  headerellipsis = (str) => {
    return (str.length > 10 ? str.slice(0, 10) + ' ...' : str)
  }
  render() {
    return (
      <div className="container" >
        <h2 className="noteheadline">Your Notes:</h2>
        <div className="notes">
          {this.props.notes.map(note => {
            return (
              <div key={note.id} className="notePreview">
                <Note className="note"
                  title={this.headerellipsis(note.title)}
                  id={note.id}
                  text={this.bodyellipsis(note.textBody)}
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
