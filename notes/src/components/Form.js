import React from "react";
import { StyledButton } from "./styles";
import styled from "styled-components";

const StyledForm = styled.form`
  padding: 0 20px;
  background: #f9f9f9;
  width: 100%;
`;

const StyledInput = styled.input`
  display: block;
  padding: 10px 10px;
  margin: 20px 0;
  width: 100%;
  height: 50px;
  font-size: 1.4rem;
  color: #111;
  border: 1px solid #eee;
  &:focus {
    outline: none;
    border: 1px solid #00b6bb;
  }
`;
const TextArea = styled.textarea`
  display: block;
  padding: 10px 10px;
  width: 100%;
  height: 200px;
  font-size: 1.4rem;
  color: #111;
  border: 1px solid #eee;
  &:focus {
    outline: none;
    border: 1px solid #00b6bb;
  }
`;
const Form = props => {
  return (
    <div>
      <StyledForm onSubmit={props.handleSubmit}>
        <StyledInput
          type="text"
          placeholder="Note Title"
          value={props.title}
          name="title"
          autoComplete="off"
          onChange={props.handleInputChange}
        />
        <TextArea
          name="textBody"
          placeholder="Note Content"
          value={props.textBody}
          onChange={props.handleInputChange}
        />
        <StyledButton>{props.label}</StyledButton>
      </StyledForm>
    </div>
  );
};

export default Form;
