import React, { Component } from 'react';

import Note from './Note';
// import { Route } from 'react-router-dom'

class NoteList extends Component {

  render() {
    console.log('NoteList Component came first:', this.props.noteList);
    return this.props
    ?  (
      <div className="note-list">
          {this.props.noteList.filter(item =>
            (JSON.stringify(item.title)+JSON.stringify(item.textBody))
            .toLowerCase().includes(this.props.filter.toLowerCase()))
            .map(note => {
              console.log('NoteList _id:', note._id);
            return (
                <React.Fragment key={note._id}>
                <Note
                  match={this.props.match}
                  note={note}
                  // key={note._id}
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
