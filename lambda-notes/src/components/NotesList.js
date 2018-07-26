import React from 'react';
import { connect } from 'react-redux';
import Note from './Note';
import { Link } from 'react-router-dom';

const NotesList = (props) => {
  console.log('log 2', props)
  return ( 
    <div>
      <h3>Your Notes:</h3>
      {
        props.notes.map((note) => {
          return (
            <Link key={Math.random()} to={`/note/${note.id}`}>
              <Note title={note.title} textBody={note.textBody} />
            </Link>
          );
        })
      }
    </div>
   );
};
 
const mapStateToProps = (state) => {
  return {
    notes: state.notes
  };
};

export default connect(mapStateToProps)(NotesList);