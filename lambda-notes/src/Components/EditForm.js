import React from "react";
import { connect } from "react-redux";
import { fetchNotes, editNote } from "../actions/noteActions";

import { Form, Button } from "react-bootstrap";


class EditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      textBody: ""
    };
  }

  componentDidMount() {
    const { notes, match } = this.props;
    const note = notes.find(note => `${note.id}` === match.params.id);
    this.setState(note);
  }

  inputHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  updateNote = event => {
    const { notes, match } = this.props;
    const note = notes.find(note => `${note.id}` === match.params.id);
    event.preventDefault();
    this.props.editNote(this.state);
    this.props.history.push(`/note/${note.id}`);
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.updateNote}>
          <Form.Group controlId="formTitle">
            <Form.Label>Note Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Title..."
              onChange={this.inputHandler}
              value={this.state.title}
              name="title"
            />
            <Form.Text className="text-muted">Or maybe Sam Altman.</Form.Text>
          </Form.Group>

          <Form.Group controlId="formBody">
            <Form.Label>Body</Form.Label>
            <Form.Control
              as="textarea"
              aria-label="With textarea"
              placeholder=""
              style={{ height: "50vh", resize: "none", overflow: "auto" }}
              onChange={this.inputHandler}
              value={this.state.textBody}
              name="textBody"
            />
          </Form.Group>
          <Button variant="info" type="submit" value="Update">
            Update
          </Button>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.noteReducer.notes
  };
};

export default connect(
  mapStateToProps,
  { fetchNotes, editNote: editNote }
)(EditForm);