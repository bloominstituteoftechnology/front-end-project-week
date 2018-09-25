import React, { Component } from 'react';

import Note from './Note';
import { Route } from 'react-router-dom'

class NoteList extends Component {
  constructor(props){
    super(props);
  }
  render() {
    console.log('NoteList:', this.props);
    return this.props
    ?  (
      <div className="note-list">
        <h2> Your Notes: </h2>
          {this.props.noteList.map(note => {
            return (
              // <Route path='/note-list/:_id' render={props =>
                <React.Fragment>
                <Note
                  // {...props}
                  // key={note.id}
                  match={this.props.match}
                  note={note}
                />
              </React.Fragment>
              // } />
            );
          })}
      </div>
    )
    : (<h2>API Error...</h2>)
  }
}

export default NoteList;
