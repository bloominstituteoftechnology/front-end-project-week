import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchNotes, deleteNote } from "../actions/noteActions";

import { Button } from "react-bootstrap";

import styled from "styled-components";

// TODO: Use bootstrap to style
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  flex-direction: column;
  padding: 20px;
  min-width: 100vw;
  overflow: hidden;
`;

const NoteContainer = styled.div`
  padding: 0px 25px;
`;

const Actions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-top: 20px;
  padding-right: 20px;
`;

const Modal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(114, 114, 114, 0.75);
`;

const DeleteModal = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 100px;
  border: 3px solid rgb(187, 187, 187);
  background: white;
  z-index: 2;

  p {
    text-align: center;
    padding: 0 0 20px 0;
  }
`;

const ModalButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      delete: false
    };
  }

  componentDidMount() {
    this.props.fetchNotes();
  }

  deleteToggleOn = () => {
    this.setState({ delete: true });
  };

  deleteToggleOff = () => {
    this.setState({ delete: false });
  };

  // deleted = () => {
  //   deleteNote(this.props.notes.id);
  // }

  render() {
    if (this.props.notes.length) {
      let note = this.props.notes.find(
        note => `${note.id}` === this.props.match.params.id
      );

      const deleteNotes = event => {
        event.preventDefault();
        this.props.deleteNote(note.id);
        this.props.history.push("/");
      };

      return (
        <Container>
          {this.state.delete && (
            <Modal>
              <DeleteModal>
                <p>Are you sure you want to delete this?</p>
                <ModalButtons>
                  <Button
                    variant="danger"
                    style={{ width: "75px", margin: "0 10px" }}
                    onClick={deleteNotes}
                  >
                    Delete
                  </Button>
                  <Button
                    variant="primary"
                    style={{ width: "75px", margin: "0 10px" }}
                    onClick={this.deleteToggleOff}
                  >
                    No
                  </Button>
                </ModalButtons>
              </DeleteModal>
            </Modal>
          )}

          <Actions>
            <Link to={`/note/${note.id}/edit`} style={{ color: "black" }}>
              <Button style={{ marginRight: "20px", width: "75px" }}>
                Edit
              </Button>
            </Link>
            <Button
              variant="danger"
              style={{ opacity: 0.5 }}
              onClick={this.deleteToggleOn}
            >
              Delete
            </Button>
          </Actions>
          <NoteContainer>
            <h2>{note.title}</h2>
            <p style={{ lineHeight: "2" }}>{note.textBody}</p>
          </NoteContainer>
        </Container>
      );
    }
  }
}

const mapStateToProps = state => ({
  notes: state.noteReducer.notes
});

export default connect(
  mapStateToProps,
  { fetchNotes, deleteNote }
)(Note);
