import React from 'react';
import { connect } from 'react-redux';

import Note from './Note';

class NotesList extends React.Component {
  render() {
    return (
      <div>
        {this.props.notes.map((note, index) => {
          return <Note key={note.id} index={index} note={note} />;
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
  };
};

export default connect(mapStateToProps, null)(NotesList);
