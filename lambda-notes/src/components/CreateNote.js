import React from 'react';
import { connect } from 'react-redux';
import NoteForm from './NoteForm';
import { saveNote } from '../actions/notesActions';
import Sidebar from './Sidebar';

const CreateNote = (props) => {
  return ( 
    <div>
      <Sidebar />
      <h3>Create New Note:</h3>
      <NoteForm
        onSubmit={(note) => {
          console.log(note);
          props.dispatch(saveNote(note));
          props.history.push('/');
        }}
      />
    </div>
  );
}
 
export default connect()(CreateNote);
