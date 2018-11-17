import React from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 5% 1% 0 10%;
`;
const Input = styled.input`
  boreder: 1px solid #333;
  padding: 10px;
  width: 400px;
  font-size: 20px;
  margin-bottom: 10px;
`;

const TextArea = styled.textarea`
  border: 1px solid #333;
  outline: none;
  font-size: 20px;
  padding: 10px;
  width: 700px;
  height: 400px;
`;
const Button = styled.button`
  background: #00cec9;
  border: 1px solid rgb(167, 167, 167);
  padding: 15px;
  margin-top: 10px;
  width: 200px;
  font-size: 20px;
  font-weight: bold;
  color: white;
  outline: none;
  cursor: pointer;
`;

const EditNote = props => {
    console.log(props)
  const note = props.notes.find(note => props.match.params.id === `${note._id}`);
  const editNotes = e => {
    e.preventDefault();
    props.editNote(note._id);
    props.history.push(`/note/${note._id}`);
  };

  return (
    <Form>
      <h1>Edit Note:</h1>

      <Input
        type="text"
        name="title"
        value={props.title}
        placeholder="Title"
        onChange={props.handleChange}
      />
      <TextArea
        name="textBody"
        value={props.textBody}
        id="note.id"
        cols="60"
        rows="30"
        onChange={props.handleChange}
        placeholder="Note Content"
      />
      <Button onClick={editNotes}>Save</Button>
    </Form>
  );
};

export default EditNote