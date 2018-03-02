import React, { Component } from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

// Styles
const NoteDetailsStyled = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: rgb(243, 243, 243);
  border-left: 1px solid rgb(151, 151, 151);
  border-right: 1px solid rgb(151, 151, 151);

  header {
    display: flex;
    justify-content: flex-end;
    margin: 10px 100px 10px 0;
    width: 90%;
  }

  h2 {
    margin-bottom: 20px;
  }

  a {
    padding-left: 10px;
    text-decoration: underline;
    font-weight: bold;
    cursor: pointer;
  }

  p {
    width: 90%;
    white-space: pre-line;
    padding-bottom: 15px;
    line-height: 25px;
    }

  ul {
    padding-left: 20px;
    list-style-type: disc;
  }

  ol {
    padding-left: 20px;
    list-style-type: decimal;
  }

  li, tbody {
    font-size: 1rem;
    line-height: 25px;
  }

  thead, td, th {
    border: 1px solid black;
    padding: 10px;
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
      <NoteDetailsStyled className="NoteDetails">
        <header>
          <a onClick={this.props.showNoteEditForm}>Edit</a>
          <a onClick={this.props.showDeleteModal}>Delete</a>
        </header>
        <h2>{this.state.title}</h2>
        <ReactMarkdown source={this.state.content} />
      </NoteDetailsStyled>
    )
  }
} // NoteDetails Component

export default NoteDetails;