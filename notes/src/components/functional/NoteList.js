import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { addNote } from '../../store/actions';
import Note from '../presentational/Note';

class NoteList extends React.Component {
  render() {
    return (
      <div>
        <div>
          {this.props.notes.map(note => (
            <Link to={`/notes/${note.id}`}>
              <Note key={note.id} note={note} />
            </Link>

          ))}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {

  return {
    notes: state.notes
  }
}

export default connect(mapStateToProps, { addNote })(NoteList);