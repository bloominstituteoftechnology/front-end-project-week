import React from 'react';
import { connect } from 'react-redux';
import NoteForm from './NoteForm';

const CreateNote = (props) => {
  return ( 
    <div>
      <h3>Create New Note</h3>
      <NoteForm
        onSubmit={(note) => {
          console.log(note);
        }}
      />
    </div>
   );
}
 
export default connect()(CreateNote);
