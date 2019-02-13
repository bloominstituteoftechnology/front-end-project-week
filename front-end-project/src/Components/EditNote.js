import React from 'react';
import styled from 'styled-components';
const Container = styled.div`
  h2 {
    margin-bottom: 20px;
    font-weight: bold;
    font-size: 2.5rem;
    color: #4B4B4A;
  }
`;
const Form = styled.form`
  input, textarea {
    margin-bottom: 20px;
    border: 1px solid #B7B5B7;
    border-radius: 3px;
    font-size: 1.6rem;
    padding: 15px 10px;
  }
  input {
    width: 50%;
    height: 35px;
  }
  textarea {
    width: 98%;
    height: 450px;
  }
`;
const Button = styled.button`
  width: 30%;
  color: white;
  padding: 15px 0;
  margin: 10px 0;
  background-color: #33CAFF;
  font-size: 1.6rem;
  a {
    color: #FFF;
  }
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
        <Button type="submit" onClick={props.showModal} >Update</Button>
      </Form>
    </Container>
  );
}
export default EditNote;
