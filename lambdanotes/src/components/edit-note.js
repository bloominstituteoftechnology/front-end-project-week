import React, { Component } from "react";
import styled from "styled-components"

// Styles
const EditNoteStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 100%;
  height: 100vh;
  background-color: rgb(243, 243, 243);
  border-left: 1px solid rgb(151, 151, 151);

  button {
    width: 100px;
    margin-top: 20px;
    height: 50px;
    background-color: rgb(94, 190, 195);
    color: #ffffff;
    outline: none;
    font-size: 0.9rem;
    font-weight: bold;
  }

  .NoteTitleInput {
    width: 50%;
    margin-top: 20px;
    outline: none;
    font-size: 1rem;
  }

  .NoteContentInput {
    width: 80%;
    height: 300px;
    margin-top: 20px;
    outline: none;
    font-size: 1rem;
    resize: none;
  }

  input:focus, textarea:focus {
    outline: 1px solid rgb(94, 190, 195);
  }
`;

// Edit Note Component
class EditNote extends Component {
  state = {
    title: '',
    content: '',
    id: '',
  }

  componentDidMount() {
    let { title, content, id } = this.props.noteDetails;
    this.setState({
      title: title,
      content: content,
      id: id,
    })
  }

  handleTitleInput = event => {
    this.setState({ title: event.target.value });
  };

  handleContentInput = event => {
    this.setState({ content: event.target.value });
  }

  handleUpdate = () => {
    let updatedNote = {
      title: this.state.title,
      content: this.state.content,
      id: this.state.id,
    }
    this.props.updateNote(updatedNote);
  }

  render() {
    return (
      <EditNoteStyled>
        <h1>Edit Note:</h1>
        <input
          className="NoteTitleInput"
          type="text"
          value={this.state.title}
          onChange={this.handleTitleInput}
        />
        <textarea
          className="NoteContentInput"
          type="text"
          cols="50"
          rows="10"
          value={this.state.content}
          onChange={this.handleContentInput}
        />
        <button onClick={this.handleUpdate}>Update</button>
      </EditNoteStyled>
    )
  }
} // Edit Note Component

export default EditNote;