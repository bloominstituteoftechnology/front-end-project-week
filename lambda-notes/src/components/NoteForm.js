import React from "react";
import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`
const StyledInput = styled.input`
  height: 38px;
  padding-left: 10px;
  width: 309px;
  border-radius: 3px;
  border: 1px solid gray;
  margin: 24px 0 11px 0;
`
const StyledTextArea = styled.textarea`
  border-radius: 3px;
  padding: 17px;
`
const SaveButton = styled.input`
  margin-top: 16px;
  padding: 10px;
  color: white;
  font-size: 13px;
  border-radius: 0;
  width: 167px;
  background-color: #58b6bb;
  border: 1px solid #92a7a9; 
`
const NoteForm = ({ handleChange, handleSubmit, title, content }) => (
  <StyledForm onSubmit={handleSubmit}>
    <StyledInput
      type="text"
      name="title"
      onChange={handleChange}
      value={title}
      placeholder="Note Title"
      required
      autoComplete='off'
    />
    <StyledTextArea
      name="textBody"
      onChange={handleChange}
      value={content}
      placeholder="Note Content"
      rows='20'
      required
      autoComplete='off'
    />
    <SaveButton type="submit" value="Save"/>
  </StyledForm>
);

export default NoteForm;
