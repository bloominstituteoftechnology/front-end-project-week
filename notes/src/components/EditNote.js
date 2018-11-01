import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  
`;

export const Form = styled.form`
  
`;

export const Button = styled.button`

`;


const EditNote = props => {
  return (
    <Container>
      <h2>Edit Note:</h2>

      <Form onSubmit={(e) => props.editNote(e, props.note._id)}>
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

        <Button type="submit">Update</Button>
      </Form>
    </Container>
  );
}

export default EditNote;
