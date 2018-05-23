import React from 'react';
import SaveNote from '../../components/SaveNote';


const CreateNew = () => {
  return (
    <React.Fragment>
      <SaveNote title="Create New Note" action="Save"/>
    </React.Fragment>
  );
}

export default CreateNew;