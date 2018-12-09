import React, { Component } from "react";
import { Link } from "react-router-dom";
import { deleteNote } from "../store/actions";
import { connect } from "react-redux";
import styled from "styled-components";

// ==============================
// ======   STYLED COMPS   ======
// ==============================

const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 10px;
  text-align: right;
`;

const StyledLink = styled(Link)`
  color: #4a4a4a;
  font-weight: bold;
  border-bottom: 2px solid #4a4a4a;
  text-decoration: none;

  &:hover {
    opacity: 0.7;
  }
`;

const Delete = styled.p`
  margin: 0 15px;
  cursor: pointer;
  padding: 0;
  color: #4a4a4a;
  border-bottom: 2px solid #4a4a4a;
  font-weight: bold;

  &:hover {
    opacity: 0.7;
  }
`;

const NoteDiv = styled.div`
  width: 100%;
  padding: 20px;
  padding-left: 350px;
  letter-spacing: 0.6px;
`;

// ==============================
// ======    COMPONENTS    ======
// ==============================

class Note extends Component {
  render() {
    let SingleNote = this.props.notes.filter(
      note => note._id === this.props.match.params.noteId
    );

    if (!SingleNote.length) {
      return <h3>Retrieving Note...</h3>;
    }
    return (
      <NoteDiv>
        <Nav>
          <StyledLink to={`/note-edit/${this.props.match.params.noteId}`}>
            edit
          </StyledLink>
          <Delete
            onClick={() => {
              deleteNote(this.props.match.params.noteId);
              this.props.history.push("/notes");
            }}
          >
            delete
          </Delete>
        </Nav>
        <h2>{SingleNote[0].title}</h2>
        <p>{SingleNote[0].textBody}</p>
      </NoteDiv>
    );
  }
}

const mapStateToProps = ({ fetchingNote, notes }) => ({
  notes,
  fetchingNote
});

export default connect(
  mapStateToProps,
  { deleteNote }
)(Note);
