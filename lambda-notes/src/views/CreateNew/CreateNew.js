import React from 'react';
import SaveNote from '../../components/SaveNote';


const CreateNew = () => {
  return (
    <React.Fragment>
      <SaveNote title="Create New Note" action="Update"/>
    </React.Fragment>
  );
}

export default CreateNew;