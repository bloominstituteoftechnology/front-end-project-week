import React, { Component } from 'react';

import Note from './Note';
// import { Route } from 'react-router-dom'

class NoteList extends Component {
  // constructor(props){
  //   super(props);
  // }
  render() {
    return this.props
    ?  (
      <div className="note-list">
          {this.props.noteList.filter(item => item.title == 'Note Title')
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
