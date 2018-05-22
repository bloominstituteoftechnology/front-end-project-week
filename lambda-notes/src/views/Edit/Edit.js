import React from 'react';
import SaveNote from '../../components/SaveNote';

const Edit = props => {
  return (
    <React.Fragment>
      <SaveNote title="Edit Note" action="Update" noteId={props.match.params.id}/>
    </React.Fragment>
  );
}

export default Edit;