import React, { Component } from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

const NoteStyled = styled.a`
  display: flex;
  flex-direction: column;
  width: 160px;
  height: 180px;
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
  }

  ul {
    list-style-position: inside;
    list-style-type: disc;
  }

  ol {
    /* padding-left: 15px; */
    list-style-type: decimal;
    list-style-position: inside;
  }

  li, tbody, thead {
    font-size: 0.8rem;
    line-height: 20px;
  }

    thead, td, th {
    font-size: 0.7rem;
    border: 1px dashed rgb(166, 166, 166);
    padding: 5px;
  }

  th, table {
    border: 1px solid rgb(166, 166, 166);
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