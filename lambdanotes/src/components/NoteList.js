import React from 'react';
import { Link } from 'react-router-dom';
import Note from './Note';

import './NoteList.css';

class NoteList extends React.Component {
  state = {
    notes: this.props.notes,
  };

  handleNoteIndex = index => {
    this.props.handleNoteViewIndex(index);
  };

  render() {
    return (
      <div>
        <h2>Your Notes:</h2>
        <ul className="NoteList">
          {this.state.notes.map(note => {
            return (
              <Link to={"/view"} key={note.id} onClick={() => {this.handleNoteIndex(note.id)}}>
                <Note
                  title={note.title}
                  body={note.body}
                />
              </Link>
            );
          })}
        </ul>
      </div>
    );
  };
}

export default NoteList;