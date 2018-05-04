import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardText,
  CardTitle
} from "reactstrap";
import { Link } from "react-router-dom";

function mapStateToProps(state) {
  return {
    notes: state.notes.notes
  };
}

class NotesList extends Component {
  render() {
    return (
      <Container className="my-5">
        <Row>
          <Col>
            <h3 className="header">Your Notes:</h3>
          </Col>
        </Row>
        <Row>
          {this.props.notes.map((note, key) => {
            return (
              <Col sm={4}>
                <Link className="card-link" to={`/:uid/displayNotes/${note._id}`}>
                  <Card className="note pb-3">
                    <CardBody>
                      <CardTitle>{note.title}</CardTitle>
                      <hr />
                      <CardText>{note.body}</CardText>
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
