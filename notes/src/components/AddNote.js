import React from "react";
import styled from "styled-components";

const Form = styled.form`
  margin-left: 250px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2%;
  background-color: #f3f3f3;
  min-height: 100vh;

  h3 {
    font-size: 1.75rem;
    font-weight: bold;
    margin-top: 1rem;
  }

  input {
    width: 20%;
    padding: 1%;
    margin-bottom: 1%;
    border: 1px solid grey;
    font-size: 1.2rem;
  }

  textarea {
    height: 300px;
    margin-bottom: 3%;
    vertical-align: top;
    width: 60%;
    padding: 1%;
    border: 1px solid grey;
    font-size: 1.1rem;
  }

  div {
    width: 15%;
    height: 40px;
    color: #ffffff;
    background-color: #2ac0c4;
    font-weight: bold;
    font-size: 1rem;
    vertical-align: middle;
    border: 1px solid grey;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      background-color: #ffffff;
      color: #2ac0c4;
    }
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
        <div onClick={this.submitHandler}>
          {this.props.edit ? "Edit Note" : "Add Note"}
        </div>
      </Form>
    );
  }
}

export default NoteForm;
