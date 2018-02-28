import React, { Component } from 'react';
import NoteListNote from './noteListNote';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import NoteView from './noteView';

class NoteList extends Component {
  componentDidMount() {
    this.setState({ notes: this.props.notes })
  }
  clampNote = (body, limit) => {
    let textArr = body.split('')
    let result = [];
    if (body.length > limit) {
       return result.concat(textArr
         .slice(0, limit).join('') + '...')
    }
    return body;
  }
  render() {
    return (
      <div className="note-list">
      <div className="note-list__title">Your Notes:</div>
          { this.props.notes.map((note) => {
            return (
              <Router key={note.id}>
                <div>
                  <NavLink to={`/${note.id}`}>
                    <NoteListNote title={this.clampNote(note.title, 10)} body={this.clampNote(note.body, 120)} />
                  </NavLink>
                  {/* <Route component={NoteList} path="/" exact/> */}
                  <Route path={`/${note.id}`} component={NoteView} />
                </div>
              </Router>
            )
          })}
      </div>
    );
  }
}

export default NoteList;