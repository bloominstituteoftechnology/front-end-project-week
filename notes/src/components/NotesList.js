import React, { Component } from 'react';

import Note from './Note';
// import { Route } from 'react-router-dom'

class NoteList extends Component {

  render() {
    return this.props
    ?  (
      <div className="note-list">
          {this.props.noteList.filter(item =>
            (JSON.stringify(item.title)+JSON.stringify(item.textBody))
            .toLowerCase().includes(this.props.filter.toLowerCase()))
            .map(note => {
            return (
              // <Route path='/note-list/:_id' render={props =>
                <React.Fragment>
                <Note
                  match={this.props.match}
                  key={note._id}
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
