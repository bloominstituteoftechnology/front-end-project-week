import React, { Component } from "react";
import { Link } from "react-router-dom";
import { deleteNote } from "../store/actions";
import { connect } from "react-redux";
import styled from "styled-components";
import "./Note.css";

// ==============================
// ======   STYLED COMPS   ======
// ==============================

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  padding: 10px;
  text-align: right;
  position: fixed;
  right: 5px;
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

const Checkbox = styled.input`
  display: none;
`;

const Label = styled.label`
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

const DeleteModal = styled.div`
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1500;
  opacity: 0;
  width: 0;
  transition: all 0.8s cubic-bezier(0.08, -0.55, 0.265, 1.55);
  background: rgba(255, 255, 255, 0.8);
`;

const ModalBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Center = styled.div`
  border: 2px solid #787878;
  padding: 30px;
  background: white;
  & > p {
    color: #787878;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: space-around;
  width: 80%;
  margin: 0 auto;
`;

const NoButton = styled.label`
  font-size: 13.333px;
  margin-left: 15px;
  background: #2bc1c4;
  color: white;
  font-weight: bold;
  text-decoration: none;
  padding: 12px 0;
  cursor: pointer;
  border: 1px solid #979797;
  transition: all 0.3s ease-in-out;
  display: block;
  width: 50%;

  &:hover {
    background: white;
    color: #2bc1c4;
  }

  &:active {
    opacity: 0.5;
  }
`;

const Delete = styled.button`
  background: #ca001a;
  color: white;
  font-weight: bold;
  text-decoration: none;
  padding: 12px 0px;
  cursor: pointer;
  border: 1px solid #979797;
  transition: all 0.3s ease-in-out;
  display: block;
  width: 50%;

  &:hover {
    background: white;
    color: #ca001a;
  }

  &:active {
    opacity: 0.5;
  }
`;

const NoteDiv = styled.div`
  width: 100%;
  padding: 20px;
  padding-left: 350px;
  letter-spacing: 0.6px;

  @media (max-width: 650px) {
    padding-left: 20px;
    padding-top: 300px;
  }
`;

const H2 = styled.h2`
  padding-top: 30px;
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
          <Checkbox id="navi-toggle" type="checkbox" />
          <Label htmlFor="navi-toggle">
            <span>delete</span>
          </Label>
          <DeleteModal className="delete-modal">
            <ModalBox>
              <Center>
                <p>Are you sure you want to delete this?</p>
                <ButtonBox>
                  <Delete
                    onClick={() => {
                      this.props.deleteNote(this.props.match.params.noteId);
                      this.props.history.push("/notes");
                    }}
                  >
                    Delete
                  </Delete>
                  <NoButton htmlFor="navi-toggle">No</NoButton>
                </ButtonBox>
              </Center>
            </ModalBox>
          </DeleteModal>
        </Nav>
        <H2>{SingleNote[0].title}</H2>
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
