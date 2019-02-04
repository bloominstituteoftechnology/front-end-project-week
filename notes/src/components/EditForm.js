import React, { Component } from "react";

import styled from "styled-components";

const Container = styled.div`
  padding: 65px 20px 500px 20px;
  background: #f2f0f2;
  overflow-wrap: break-word;
  min-width: 100%;
  padding-bottom: 150%;
  overflow: hidden;
`;

const InputTitle = styled.input`
  font-size: 14px;
  padding-left: 10px;
  height: 40px;
  width: 60%;
  margin-bottom: 15px;
  border-radius: 3px;
  outline: none;
`;

const InputBody = styled.textarea`
  font-size: 14px;
  padding-top: 10px;
  padding-left: 10px;
  width: 100%;
  height: 300px;
  margin-bottom: 15px;
  border-radius: 3px;
  outline: none;
  resize: none;
  overflow: auto;
`;
const Button = styled.button`
  font-size: 14px;
  font-weight: bold;
  width: 250px;
  text-align: center;
  border: 1px solid rgb(150, 162, 162);
  color: white;
  background-color: rgb(54, 192, 195);
  border-radius: 3px;
  padding: 15px 25px;
  cursor: pointer;
`;

const EditForm = props => {
  const note = props.notes.find(note => `${note.id}` === props.match.params.id);

  const updateNotes = event => {
    event.preventDefault();
    props.editNote(note.id);
    props.history.push("/");
  };

  return (
    <Container>
      <h2>Edit Note:</h2>
      <form>
        <InputTitle
          onChange={props.inputHandler}
          placeholder="Note Title"
          value={props.updateTitle}
          name="updateTitle"
        />
        <InputBody
          onChange={props.inputHandler}
          placeholder="Note Content"
          value={props.updateTextBody}
          name="updateTextBody"
        />
        <Button onClick={updateNotes}>Update</Button>
      </form>
    </Container>
  );
};

export default EditForm;
