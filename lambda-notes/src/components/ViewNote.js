import React from 'react';
import { connect } from 'react-redux';
import Sidebar from './Sidebar';
import Note from './Note';

const ViewNote = (props) => {
  console.log('ViewNote', props);
  const selectedId = parseInt(props.match.params.id, 10)
  const selected = props.notes.filter(note => note.id === selectedId);
  const selectedNote = selected[0];
  console.log('shit', selectedNote)
  return ( 
    <div>
      <Sidebar />
      <Note title={selectedNote.title} textBody={selectedNote.textBody} />
    </div>
   );
}
  
const mapStateToProps = (state) => {
  return {
    notes: state
  };
};

export default  connect(mapStateToProps)(ViewNote);