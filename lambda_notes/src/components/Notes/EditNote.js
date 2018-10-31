import React from 'react';

import { FormContainer, FormGroup, ActionButton } from './Styles';

const EditNote = props => {
  return (
    <FormContainer>
      <h2>Edit Note:</h2>

      <FormGroup onSubmit={(e) => props.editNote(e, props.note._id)}>
        <input
          type="text"
          placeholder="Note Title"
          onChange={props.handleInput}
          name="title"
          value={props.title}
        />

        <textarea
          type="text"
          placeholder="Note Content"
          onChange={props.handleInput}
          name="textBody"
          value={props.textBody}
        />

        <ActionButton type="submit">Update</ActionButton>
      </FormGroup>
    </FormContainer>
  );
}

export default EditNote;
