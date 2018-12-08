import React, { Component } from "react";
import styled from "styled-components";
import { getNotes } from "../store/actions";
import { connect } from "react-redux";
import { getSingleNote } from "../store/actions/index";

const List = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 80px 20px;
  background: #f3f3f3;
`;

const Header = styled.header`
  width: 100%;

  & > p {
    color: #4a494a;
    font-size: 18px;
  }
`;

const Div = styled.div`
  padding: 15px;
  background: white;
  border: 1px solid #999999;
  width: 280px;
  height: 320px;
  overflow: hidden;
`;

const H2 = styled.h2``;

const P = styled.p``;

class NotesList extends Component {
  componentDidMount = () => {
    getNotes();
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
              getSingleNote(note._id);
            }}
            key={note._id}
          >
            <H2>{note.title}</H2>
            <P>{note.textBody}</P>
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
