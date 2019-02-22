import React from "react";
import { connect } from "react-redux";
import { fetchNotes, addNote } from "../../actions/noteActions";
import * as ROUTES from "../../constants/routes";

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

class NewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      textBody: ""
    };
  }

  inputHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  createNote = event => {
    event.preventDefault();
    this.props.addNote(this.state);
    this.props.history.push(ROUTES.HOME);
  };

  render() {
    return (
      <Container>
        <Form>
          <Form.Group controlId="formTitle">
            <Form.Label>Note Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Title..."
              onChange={this.inputHandler}
              value={this.state.title}
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
              onChange={this.inputHandler}
              value={this.state.textBody}
              name="textBody"
            />
          </Form.Group>
          <Button
            variant="outline-primary"
            type="submit"
            onClick={this.createNote}
          >
            Save Note
          </Button>
        </Form>
      </Container>
    );
  }
}

const mapStateToProps = () => {
  return {};
};

export default connect(
  mapStateToProps,
  { fetchNotes, addNote: addNote }
)(NewForm);
