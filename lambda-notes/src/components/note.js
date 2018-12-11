import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
class Note extends React.Component {
  render() {
    return (
      <ANote
        onClick={() =>
          this.props.history.push(`/myNotes/${this.props.note._id}`)
        }
      >
        <h2>{this.props.note.title}</h2>
        {this.props.note.textBody.length > 150 ? (
          <p>{this.props.note.textBody.slice(0, 150)} . . . </p>
        ) : (
          <p>{this.props.note.textBody}</p>
        )}
      </ANote>
    );
  }
}
const ANote = styled.div`
  width: 250px;
  height: 250px;
  background: yellow;
  margin: 15px;
  border: 2px solid black;
  padding: 15px 20px;
  h2 {
    border-bottom: 2px solid black;
    margin: 0;
  }
`;
export default Note;
