import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  Col,
  Row,
  Container,
  Card,
  CardBody,
  CardTitle,
  CardText
} from "reactstrap";

function mapStateToProps(state) {
  return {
    notes: state.notes
  };
}

class NotesList extends Component {
  render() {
    console.log("Notes List: ", this.props.notes);
    return (
      <Container className="my-5">
        <Row>
          <h3 className="header">Your Notes:</h3>
        </Row>
        <Row>
          {this.props.notes.map(note => {
            return (
              <Col sm={4}>
                <Link className="card-link" to={`/viewNotes/${note.id}`}>
                  <Card className="note pb-3">
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
