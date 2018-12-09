import React, { Component } from "react";
import styled from "styled-components";
import { getNotes } from "../store/actions";
import { connect } from "react-redux";

// ==============================
// ======   STYLED COMPS   ======
// ==============================

const List = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 50px 20px;
  padding-left: 350px;
  background: #f3f3f3;
`;

const Header = styled.header`
  width: 100%;

  & > p {
    color: #4a494a;
    font-size: 18px;
    padding-left: 10px;
  }
`;

const Div = styled.div`
  padding: 15px;
  background: white;
  border: 1px solid #999999;
  width: 200px;
  height: 220px;
  margin: 10px;
  overflow: hidden;
  cursor: pointer;
`;

const H2 = styled.h2`
  font-size: 16px;
  padding-bottom: 10px;
  border-bottom: 1px solid #4a494a;
`;

const P = styled.p`
  font-size: 12px;
`;

// ==============================
// ======    COMPONENTS    ======
// ==============================

class NotesList extends Component {
  state = {
    noteString: ""
  };
  componentDidMount = () => {
    getNotes();
    this.getNoteString();
  };

  getNoteString = (text, limit) => {
    if (text) {
      let finalStr = "",
        str1 = text.replace(/\s+/g, " "),
        str2 = str1.split(" "),
        wordsNum = str2.length;

      if (wordsNum > limit) {
        for (let i = 0; i < limit; i++) {
          finalStr = `${finalStr} ${str2[i]} `;
        }
        return `${finalStr}...`;
      } else return text;
    } else return null;
  };

  render() {
    if (!this.props.notes || this.props.fetchingNotes) {
      return <h3>Retrieving Notes, One Moment...</h3>;
    }

    return (
      <List>
        <Header>
          <p>Your Notes:</p>
        </Header>
        {this.props.notes.map(note => (
          <Div
            onClick={() => {
              this.props.history.push(`/note/${note._id}`);
            }}
            key={note._id}
          >
            <H2>{this.getNoteString(note.title, 10)}</H2>
            <P>{this.getNoteString(note.textBody, 25)}</P>
          </Div>
        ))}
      </List>
    );
  }
}

export default connect(
  null,
  { getNotes }
)(NotesList);
