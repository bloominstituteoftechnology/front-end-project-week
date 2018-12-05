import React from "react";
import styled from "styled-components";

const Form = styled.form`
  margin-left: 275px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2%;
  background-color: #d7d7d7;
  height: 100vh;
  input {
    width: 20%;
    padding: 1%;
    margin-bottom: 1%;
  }
  textarea {
    height: 300px;
    margin-bottom: 3%;
    vertical-align: top;
    width: 60%;
    padding: 1%;
  }
  button {
    width: 15%;
    height: 40px;
    color: #ffffff;
    background-color: #2ac0c4;
    font-weight: bold;
    font-size: 1rem;
  }
`;

class NoteForm extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      textBody: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    let id = this.props.match.params.id;
    if (this.props.edit) {
      this.props.editNote(this.state, id);
    } else {
      this.props.addNote(this.state);
    }
    this.props.history.push("/notes");
  };

  render() {
    return (
      <Form onSubmit={this.submitHandler}>
        <h3>{this.props.edit ? "Edit Note" : "Create New Note"}</h3>
        <input
          name="title"
          onChange={this.handleChange}
          required={!this.props.edit}
          placeholder="Note title"
        />
        <textarea
          name="textBody"
          onChange={this.handleChange}
          required={!this.props.edit}
          placeholder="Note content"
        />
        <button>{this.props.edit ? "Edit Note" : "Add Note"}</button>
      </Form>
    );
  }
}

export default NoteForm;
