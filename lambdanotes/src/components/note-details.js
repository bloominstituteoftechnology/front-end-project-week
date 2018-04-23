import React, { Component } from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

// Styles
const NoteDetailsStyled = styled.div`
  padding: 20px 20px 20px 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: rgb(243, 243, 243);
  border-left: 1px solid rgb(151, 151, 151);
  border-right: 1px solid rgb(151, 151, 151);

  header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin: 10px 30px 20px 0;
    width: 100%;
  }

  .NoteDetails_Content {
    border: 1px dashed rgb(151, 151, 151);
    background-color: rgb(240, 240, 240);
    padding: 15px 0 15px 15px;
    min-height: 50%;
  }

  a {
    padding-left: 10px;
    cursor: pointer;
    font-weight: bold;
    
    &:hover {
      text-decoration: underline;
    }
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

  thead, td {
    border: 1px dashed rgb(166, 166, 166);
    padding: 10px;
  }

  th, table {
    border: 1px solid rgb(166, 166, 166);
    padding: 10px;
    background-color: rgb(243, 243, 243);
  }

  code {
    border: 1px solid rgb(225, 225, 225);
    color: rgb(215, 43, 63);
    border-radius: 2px;
    padding: 3px;
    font-family: monospace;
    background-color: rgba(166, 166, 166, 0.2);
    line-height: 15px;
  }

  pre {
    border: 1px solid rgb(225, 225, 225);
    background-color: rgba(166, 166, 166, 0.1);
    padding: 5px;
    width: 80%;
    margin: 10px 0;

    code {
      border: none;
      background-color: rgba(166, 166, 166, 0);
      border-radius: 4px;
    }
  }
`;

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
    window.scrollTo(0, 0)
  }

  handleDelete = () => {
    this.props.showDeleteModal();
  }

  render() {
    return (
      <NoteDetailsStyled className="NoteDetails">
        <header>
          <h2>{this.state.title}</h2>
          <div>
            <a onClick={this.props.showNoteEditForm}>Edit</a>
            <a onClick={this.props.showDeleteModal}>Delete</a>
          </div>
        </header>
        <ReactMarkdown source={this.state.content} className="NoteDetails_Content"/>
      </NoteDetailsStyled>
    )
  }
} // NoteDetails Component

export default NoteDetails;