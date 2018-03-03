import React, { Component } from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

const NoteStyled = styled.a`
  display: flex;
  flex-direction: column;
  width: 160px;
  height: 200px;
  border: 1px solid rgb(166, 166, 166);
  padding: 10px;
  margin: 10px;
  background-color: rgb(255, 255, 255);

  &:hover {
    border: 1px solid black;
    cursor: pointer;
  }

  h4 {
    margin: 3px 3px 0 3px;
    color: #000000;
  }

  p {
    font-size: 0.8rem;
    line-height: 25px;
    margin: 0 3px;;
    white-space: pre-line;
  }

  ul {
    list-style-position: inside;
    list-style-type: disc;
  }

  ol {
    list-style-type: decimal;
    list-style-position: inside;
  }

  li, tbody, thead {
    font-size: 0.8rem;
    line-height: 20px;
  }

    thead, td, th {
    font-size: 0.6rem;
    border: 1px dashed rgb(166, 166, 166);
    padding: 3px;
  }

  th, table {
    border: 1px solid rgb(166, 166, 166);
  }

  code {
    border: 1px solid rgb(225, 225, 225);
    color: rgb(215, 43, 63);
    border-radius: 2px;
    padding: 1px;
    font-family: monospace;
    font-size: 0.7rem;
    background-color: rgba(166, 166, 166, 0.2);
    line-height: 2px;
  }

  pre {
    border: 1px solid rgb(225, 225, 225);
    background-color: rgba(166, 166, 166, 0.1);
    padding: 3px;
    width: auto;
    margin: 5px 0;

    code {
      border: none;
      background-color: rgba(166, 166, 166, 0);
      border-radius: 4px;
    }
  }
`;

const getNoteContentPreview = (content) => {
  if (content.length > 130) {
    let contentPreview = content.slice(0, 120);
    return `${contentPreview}...`
  }
  return content;
}

class Note extends Component {
  render() {
    return (
      <NoteStyled onClick={() => { this.props.showNoteDetails(this.props.note.id) }} className="NoteTile">
        <h4>{this.props.note.title}</h4>
        <hr style={{ width: "100%" }} />
        <ReactMarkdown source={getNoteContentPreview(this.props.note.content)} />
      </NoteStyled>
    )
  }
}

export default Note;