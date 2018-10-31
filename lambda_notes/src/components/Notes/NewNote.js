import React from 'react';

import { FormContainer, FormGroup, ActionButton } from './Styles';

const NewNote = props => {
  return (
    <FormContainer>
      <h2>Create New Note:</h2>

      <FormGroup onSubmit={props.addNote}>
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

        <ActionButton type="submit">Save</ActionButton>
      </FormGroup>
    </FormContainer>
  );
}

export default NewNote;
