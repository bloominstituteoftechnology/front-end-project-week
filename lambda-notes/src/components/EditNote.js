import React from 'react';
import Sidebar from './Sidebar';
import EditNoteForm from './EditNoteForm';

const EditNote = (props) => {
  console.log('EditNote', props)
  return ( 
    <div>
      <Sidebar />
      <h3>Edit Note:</h3>
      <EditNoteForm  history={props.history}  id={props.match.params.id} />
    </div>
   );
}
 
export default EditNote;