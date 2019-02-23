import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchNotes, deleteNote } from "../actions/noteActions";

import { Button } from "react-bootstrap";
import styled from "styled-components";

const ModalPopUp = styled.div`
  margin: 26% auto;
  position: absolute;
  width: 40%;
  height: 150px;
  background:rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
`

const ModalTextContainer = styled.div`
  margin-top: 5%;
`

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
        <div>
          {this.state.delete && (
            <ModalPopUp>
              <ModalTextContainer>
                <p>Are you sure you want to delete this?</p>
                <div>
                  <Button
                    variant="danger"
                    style={{ width: "75px", margin: "0 10px" }}
                    onClick={deleteNotes}
                  >
                    Delete
                  </Button>
                  <Button
                    variant="info"
                    style={{ width: "75px", margin: "0 10px", background: "#373737" }}
                    onClick={this.deleteToggleOff}
                  >
                    No
                  </Button>
                </div>
              </ModalTextContainer>
            </ModalPopUp>
          )}

          <div>
            <Link to={`/note/${note.id}/edit`} style={{ color: "black" }}>
              <Button 
                variant="info" 
                style={{ marginRight: "10px", width: "75px", background: "#373737" }}>
                Edit
              </Button>
            </Link>
            <Button
              variant="danger"
              style={{ marginRight: "10px", width: "75px" }}
              onClick={this.deleteToggleOn}
            >
              Delete
            </Button>
          </div>
          <div>
            <h2>{note.title}</h2>
            <p>{note.textBody}</p>
          </div>
        </div>
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