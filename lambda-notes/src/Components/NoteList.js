import React, { Component } from "react";
import NoteCard from "./NoteCard";
import { Link } from "react-router-dom";
import { Row, Col, Card } from "reactstrap";
import { withRouter } from 'react-router-dom'
import { addNote, deleteNote, updateNote, error } from "../actions";

import { connect } from "react-redux";
import "./NoteCss.css";

class NoteList extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="listDiv">
        <Row className="listRow">
          {this.props.notes.map(note => {
            return (
              <Col sm="4" key={note.id}>
              <Card>
                <h3>{note.title}</h3>
                <p>{note.note}</p>
              </Card>
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

export default withRouter(connect(mapStateToProps, {
  addNote,
  deleteNote,
  updateNote,
  error
})(NoteList));
