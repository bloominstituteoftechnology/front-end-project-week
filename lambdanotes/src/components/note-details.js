import React, { Component } from 'react';
import styled from 'styled-components';

// Styles
const NoteDetailsStyled = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: rgb(243, 243, 243);

  header {
    display: flex;
    justify-content: flex-end;
    margin: 10px 100px 10px 0;
    width: 90%;
  }

  h1 {
    margin-bottom: 20px;
  }

  a {
    padding-left: 10px;
    text-decoration: underline;
    font-weight: bold;
    cursor: pointer;
  }
`

// Note Details Component
class NoteDetails extends Component {
  state = {
    title: '',
    content: '',
    id: '',
  }

  componentDidMount() {
    this.setState({
      title: this.props.noteDetails.title,
      content: this.props.noteDetails.content,
      id: this.props.noteDetails.id,
    })
  }

  handleDelete = () => {
    this.props.showDeleteModal();
  }

  render() {
    return (
      <NoteDetailsStyled>
        <header>
          <a onClick={this.props.showNoteEditForm}>Edit</a>
          <a onClick={this.props.showDeleteModal}>Delete</a>
        </header>
        <h1>{this.state.title}</h1>
        <p>{this.state.content}</p>
      </NoteDetailsStyled>
    )
  }
} // NoteDetails Component

export default NoteDetails;