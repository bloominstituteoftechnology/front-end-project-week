import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Row,
  Container,
  Card,
  CardTitle,
  CardBody,
  CardText
} from "reactstrap";
import { Link } from "react-router-dom";

function mapStateToProps(state) {
  return { notes: state.notes };
}

class Note extends Component {
  render() {
    const note = this.props.notes.filter(
      note => note.id == this.props.match.params.id
    )[0];
    return (
      <Container>
        <Row className="d-flex justify-content-end">
          <Link className="header mt-3 mr-3" to="/editNote/:id">
            edit
          </Link>{" "}
          <Link className="header mt-3 mr-3" to="/deleteNote/:id">
            delete
          </Link>
        </Row>
        <Row className="mt-5">
          <h3 className="header">{note.title}</h3>
          <p className="mt-4">{note.note}</p>
        </Row>
      </Container>
    );
  }

  componentDidMount() {}
}

export default connect(mapStateToProps)(Note);
