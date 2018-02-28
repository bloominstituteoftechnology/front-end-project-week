import React from 'react';
import { Link } from 'react-router-dom';
import Note from './Note';

import './NoteList.css';

class NoteList extends React.Component {
  boolEmptyNotes = true;

  state = {
    notes: this.props.notes,
  };

  componentWillMount() {
    if(this.state.notes.length > 0) {
      this.boolEmptyNotes = false;
    } else {
      this.boolEmptyNotes = true;
    };
  };

  handleNoteIndex = index => {
    this.props.handleNoteViewIndex(index);
  };

  render() {
    return (
      <div className="YourNotes">
        <h2 className="SectionTitle">Your Notes:</h2>
        {this.boolEmptyNotes ? (
          <h3 className="YourNotes-Empty">It looks like you don't have any notes yet, click "Create New Note" to get started!</h3>
        ) 
        : (null)}
        <ul className="YourNotes-NoteList">
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