import React from "react";
import { connect } from "react-redux";
import { fetchNotes, addNote } from "../actions/noteActions";

import { Form, Button } from "react-bootstrap";

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
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
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
          </Form.Group>
          <Form.Group controlId="formBody">
            <Form.Label>Body</Form.Label>
            <Form.Control
              as="textarea"
              aria-label="With textarea"
              placeholder="Make words here..."
              style={{ height: "50vh", resize: "none", overflow: "auto" }}
              onChange={this.inputHandler}
              value={this.state.textBody}
              name="textBody"
            />
          </Form.Group>
          <Button
            variant="info"
            type="submit"
            onClick={this.createNote}
          >
            Save Note
          </Button>
        </Form>
      </div>
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