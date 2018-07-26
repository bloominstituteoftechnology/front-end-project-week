import React from 'react';
import Sidebar from './Sidebar';
import EditNoteForm from './EditNoteForm';

const EditNote = (props) => {
  console.log('EditNote', props)
  return ( 
    <div>
      <Sidebar />
      <h3>Edit Note:</h3>
      <EditNoteForm  history={props.history}  id={parseInt(props.match.params.id, 10)} />
    </div>
   );
}
 
export default EditNote;