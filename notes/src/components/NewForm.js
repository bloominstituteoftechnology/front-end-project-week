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

const NewForm = props => {
  const createNote = event => {
    event.preventDefault();
    props.addNote();
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
            value={props.title}
            name="title"
          />
          <Form.Text className="text-muted">
            You're the next Paul Graham.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBody">
          <Form.Label>Body</Form.Label>
          <Form.Control
            as="textarea"
            aria-label="With textarea"
            placeholder="✍️"
            style={{ height: "50vh", resize: "none", overflow: "auto" }}
            onChange={props.inputHandler}
            value={props.textBody}
            name="textBody"
          />
        </Form.Group>
        <Button variant="outline-primary" type="submit" onClick={createNote}>
          Save Note
        </Button>
      </Form>
    </Container>
  );
};

export default NewForm;

// font-size: 14px;
// padding-top: 10px;
// padding-left: 10px;
// width: 100%;
// height: 300px;
// margin-bottom: 15px;
// border-radius: 3px;
// outline: none;
// resize: none;
// overflow: auto;
