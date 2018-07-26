import React from 'react';
import { connect } from 'react-redux';
import NoteForm from './NoteForm';
import Sidebar from './Sidebar';

const CreateNote = (props) => {
  return ( 
    <div>
      <Sidebar />
      <h3>Create New Note:</h3>
      <NoteForm history={props.history} />
    </div>
  );
}
 
export default connect()(CreateNote);
