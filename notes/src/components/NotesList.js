import React, { Component } from "react";
import { connect } from "react-redux";
import Note from "./Note";
import {
  Col,
  Row,
  Container,
  Card,
  CardBody,
  CardTitle,
  CardText
} from "reactstrap";
import { Link } from "react-router-dom";

function mapStateToProps(state) {
  return {
    notes: state.notes
  };
}

class NotesList extends Component {
  render() {
    return (
      <Container className="my-5">
        <Row>
          <h1>Your Notes:</h1>
        </Row>
        <Row>
          {this.props.notes.map(note => {
            return (
              <Col sm={4}>
                <Link className="card-link" to={`/viewNotes/${note.id}`}>
                  <Card className="note">
                    <CardBody>
                      <CardTitle>{note.title}</CardTitle>
                      <hr />
                      <CardText>{note.note}</CardText>
                    </CardBody>
                  </Card>
                </Link>
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default connect(mapStateToProps)(NotesList);
