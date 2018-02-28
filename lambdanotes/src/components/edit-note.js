import React, { Component } from "react";
import styled from "styled-components"

const EditNoteStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 100%;
  height: 100vh;
  background-color: rgb(243, 243, 243);

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
`;

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

  render() {
    return (
      <EditNoteStyled>
        <h1>Edit Note:</h1>
        <input
          className="NoteTitleInput"
          type="text"
          value={this.state.title}
        />
        <textarea
          className="NoteContentInput"
          type="text"
          cols="50"
          rows="10"
          value={this.state.content}
        />
        <button>Update</button>
      </EditNoteStyled>
    )
  }
}

export default EditNote;