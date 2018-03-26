import React, { Component } from "react";
import { connect } from "react-redux";
import Note from "./Note";
import { Col, Row, Container } from "reactstrap";

function mapStateToProps(state) {
  return {
    notes: state.notes
  };
}

class NotesList extends Component {
  render() {
    return (
      <Container>
        <Row>
          <h1>Your Notes:</h1>
        </Row>
        <Row>
          {this.props.notes.map(note => {
            return (
              <Col sm={4}>
                <Note note={note} />
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default connect(mapStateToProps)(NotesList);
