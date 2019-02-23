import React from "react";
import { connect } from "react-redux";
import { fetchNotes, editNote } from "../actions/noteActions";

import { Form, Button } from "react-bootstrap";

import styled from "styled-components";

const EditContainer = styled.div`
  margin: 3%;
`


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
      <EditContainer>
        <Form onSubmit={this.updateNote}>
          <Form.Group controlId="formTitle">
            <Form.Label>Note Title</Form.Label>
            <Form.Text className="text-muted">Please Enter A Title.</Form.Text>
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
              placeholder="Make Words Here..."
              style={{ height: "50vh", resize: "none", overflow: "auto" }}
              onChange={this.inputHandler}
              value={this.state.textBody}
              name="textBody"
            />
          </Form.Group>
          <Button 
            type="submit" 
            value="Update"
            style={{ width: "75px", margin: "0 10px", background: "#373737" }}>
            Update
          </Button>
        </Form>
      </EditContainer>
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