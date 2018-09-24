import React, { Component } from 'react';

import Note from './Note';

class NoteList extends Component {
  constructor(props){
    super(props);
  }
  render() {
    console.log('NoteList props:', this.props);
    return this.props
    ?  (
      <div className="note-list">
        <h1> NoteList </h1>
          {this.props.noteList.map(note => {
            console.log(note);
            return (
              <React.Fragment>
              <Note note={note} />
              </React.Fragment>
            );
          })}
      </div>
    )
    : (<h2>API Error...</h2>)
  }
}

export default NoteList;
