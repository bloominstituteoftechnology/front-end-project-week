import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Note from './Note';

export default class NotesList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <h3>Your Notes:</h3>
          </div>
          <div>
            {this.props.notes.map((note) => {
              return <NoteDetails key={note.id} note={note} />
            })}
        </div>
      </div>
    );
  }
}

function NoteDetails({ note }) {
  const { title, textBody } = note;
  return (
    <Link to={`/note/${note.id}`}>
      <div>
        <h2>{title}</h2>
        <div>{textBody}</div>
      </div>
    </Link>
  );
}

NotesList.defaultProps = {
  Notes: [],
};
