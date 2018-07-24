import React from 'react';
import { connect } from 'react-redux';
import Note from './Note';

const NotesList = (props) => {
  return ( 
    <div>
      <h1>Notes:</h1>
      {
        props.notes.map((note) => {
          return <Note key={note.id} {...note} />
        })
      }
    </div>
   );
};
 
const mapStateToProps = (state) => {
  return {
    notes: state
  };
};

export default connect(mapStateToProps)(NotesList);