import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  
`;

export const Form = styled.form`
 
`;

export const Button = styled.button`
  
`;

const CreateNote = props => {
  return (
    <Container>
      <h2>Create New Note:</h2>

      <Form onSubmit={props.addNote}>
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

        <Button type="submit">Save</Button>
      </Form>
    </Container>
  );
}

export default CreateNote;
