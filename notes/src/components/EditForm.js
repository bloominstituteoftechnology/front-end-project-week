import React from "react";

import { Form, Button } from "react-bootstrap";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  flex-direction: column;
  padding: 20px;
  min-width: 100vw;
  overflow: hidden;
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
      <Form>
        <Form.Group controlId="formTitle">
          <Form.Label>Note Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Title..."
            onChange={props.inputHandler}
            value={props.updateTitle}
            name="updateTitle"
          />
          <Form.Text className="text-muted">Or maybe Sam Altman.</Form.Text>
        </Form.Group>

        <Form.Group controlId="formBody">
          <Form.Label>Body</Form.Label>
          <Form.Control
            as="textarea"
            aria-label="With textarea"
            placeholder="✍️"
            style={{ height: "50vh", resize: "none", overflow: "auto" }}
            onChange={props.inputHandler}
            value={props.updateTextBody}
            name="updateTextBody"
          />
        </Form.Group>
        <Button variant="outline-primary" type="submit" onClick={updateNotes}>
          Update
        </Button>
      </Form>
    </Container>
  );
};

export default EditForm;
