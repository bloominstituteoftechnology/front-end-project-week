import React from 'react';
import { connect } from 'react-redux';
import Sidebar from './Sidebar';
import Note from './Note';
import { Link } from 'react-router-dom';

const ViewNote = (props) => {
  console.log('ViewNote', props);
  const selectedId = props.match.params.id
  const selected = props.notes.filter(note => note._id === selectedId);
  const selectedNote = selected[0];
  console.log('selectedNote', selectedNote)
  return ( 
    <div>
      <Sidebar />
      <Note title={selectedNote.title} textBody={selectedNote.textBody} />
      <Link to={`/edit/${props.match.params.id}`}><h5>edit</h5></Link>
      <Link to={`/delete/${props.match.params.id}`}><h5>delete</h5></Link>
    </div>
   );
}
  
const mapStateToProps = (state) => {
  return {
    notes: state.notes
  };
};

export default  connect(mapStateToProps)(ViewNote);