import React, { Component } from "react";
import { connect } from "react-redux";
import { editNote } from "../store/actions";
import styled from "styled-components";

// ==============================
// ======   STYLED COMPS   ======
// ==============================

const Form = styled.form`
  padding: 50px 20px;
  padding-left: 350px;
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (max-width: 650px) {
    padding-left: 20px;
    padding-top: 300px;
  }
`;

const Button = styled.button`
  background: #2bc1c4;
  color: white;
  font-weight: bold;
  text-decoration: none;
  padding: 12px 0;
  cursor: pointer;
  border: 1px solid #979797;
  transition: all 0.3s ease-in-out;
  display: inline-block;
  width: 25%;
  min-width: 100px;

  &:hover {
    background: white;
    color: #2bc1c4;
  }

  &:active {
    opacity: 0.5;
  }
`;

const H2 = styled.h2`
  color: #4a4a4a;
`;

const Input = styled.input`
  display: block;
  width: 55%;
  padding: 10px;
  margin-bottom: 15px;
`;

const Textarea = styled.textarea`
  padding: 20px;
  margin-bottom: 15px;
  height: 50vh;
  resize: none;

  @media (max-width: 650px) {
    height: 25vh;
  }
`;

// ==============================
// ======    COMPONENTS    ======
// ==============================

class EditNoteForm extends Component {
  state = {
    title: "",
    textBody: "",
    tags: [],
    tag: ""
  };

  componentDidMount = () => {
    let singleNote = this.props.notes.filter(
      note => note._id === this.props.match.params.noteId
    );
    if (singleNote.length) {
      this.setState({
        title: singleNote[0].title,
        textBody: singleNote[0].textBody,
        tags: singleNote[0].tags
      });
    }
  };

  handleInputChange = ({ target: { value, name } }) => {
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.title && this.state.textBody) {
      this.props.editNote({
        ...this.state,
        _id: this.props.match.params.noteId
      });
      this.setState({
        title: "",
        textBody: "",
        tags: []
      });
      this.props.history.push("/notes");
    }
    return null;
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <H2>Edit Note: </H2>
        <Input
          type="text"
          value={this.state.title}
          placeholder="Note Title"
          onChange={this.handleInputChange}
          name="title"
        />
        <Textarea
          placeholder="Note Content"
          onChange={this.handleInputChange}
          name="textBody"
          value={this.state.textBody}
        />
        <Input
          type="text"
          value={this.state.tags}
          placeholder="Note Tags"
          onChange={this.handleInputChange}
          name="tags"
        />
        <Button>Update</Button>
      </Form>
    );
  }
}

const mapStateToProps = ({ notes }) => ({
  notes
});

export default connect(
  mapStateToProps,
  { editNote }
)(EditNoteForm);
