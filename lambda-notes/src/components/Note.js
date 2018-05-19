import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Row, Col, Container, Button,  } from "reactstrap";
import delModal from "../components/Modal";
import { deleteNote } from "../actions";

function mapStateToProps(state) {
  return { notes: state.notes };
}

class Note extends Component {
  render() {
    const note = this.props.notes.filter(
      note => note.id === parseInt(this.props.match.params.id, 10)
    )[0];
    return (
      <Container>
        <Row className="d-flex justify-content-end mt-3 mr-3">
          <Link className="header-link mr-3" to={`/editNote/${note.id}`}>
            edit
          </Link>{" "}
          <delModal buttonLabel="delete">delete</delModal>
        </Row>
        <Row className="mt-5">
          <h3 className="header w-100">{note.title}</h3>
          <p className="mt-4 ">{note.note}</p>
        </Row>
      </Container>
    );
  }

  componentDidMount() {}
}

export default connect(mapStateToProps, { deleteNote })(Note);