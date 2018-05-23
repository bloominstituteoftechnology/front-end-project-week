import React, { Component } from "react";
import NoteCard from "./NoteCard";
import { Link } from "react-router-dom";
import { Row, Col, Card } from "reactstrap";
import { withRouter } from "react-router-dom";
import { addNote, deleteNote, updateNote, error } from "../actions";

import { connect } from "react-redux";
import "./NoteCss.css";

class NoteList extends Component {
  constructor() {
    super();
  }
  render() {
      console.log("noteSt", this.props.title)
    return (
      <div className="listDiv">
        <Row className="listRow">
          {this.props.notes.map(note => {
            console.log("Note", note);
            return (
              <Col sm="4" key={note.id}>
                <Link
                  to={`notes/${note.id}`}
                  note={note}
                  style={{ color: "black", textDecoration: "none" }}
                >
                  <Card>
                    {note.title}
                    <p>{note.note}</p>
                  </Card>
                </Link>
              </Col>
            );
          })}
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes
  };
};

export default withRouter(
  connect(mapStateToProps, {
    addNote,
    deleteNote,
    updateNote,
    error
  })(NoteList)
);
