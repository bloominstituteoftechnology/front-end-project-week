import React, { Component } from 'react';

import Note from './Note';

class NoteList extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return this.props
    ?  (
      <div className="note-list">
        <h2> Your Notes: </h2>
          {this.props.noteList.map(note => {
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
