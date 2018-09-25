import React from 'react';
import styled from 'styled-components';

const NoteForm = (props) => {
  return (
    <Form onSubmit={props.handleAddData}>
      <Title>Create New Note:</Title>
      <TitleInput
        onChange={props.handleInput}
        value={props.form.titleInput}
        name="title"
        placeholder="Note Title"
      />
      <ContentInput
        onChange={props.handleInput}
        value={props.form.contentInput}
        name="textBody"
        placeholder="Note Content"
      />
      <StyledButton type="submit">Save</StyledButton>
    </Form>
  );
};

export default NoteForm;

const Title = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 5px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const TitleInput = styled.textarea`
  width: 50%;
  margin: 10px 0;
  font-size: 1.2rem;
  height: 2rem;
  padding-left: 10px;
`;

const ContentInput = styled.textarea`
  margin: 10px 0;
  height: 300px;
  font-size: 1rem;
  padding: 10px;
`;

const StyledButton = styled.button`
  text-decoration: none;
  background: #59b5bb;
  color: white;
  border: 1px solid #9cb1b3;
  height: 40px;
  text-align: center;
  line-height: 40px;
  font-size: 1.2rem;
  margin: 20px 0;
  width: 30%;
`;
