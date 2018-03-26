import React, { Component } from "react";
import { connect } from "react-redux";
import NotesList from "./NotesList";
import Modal from "./Modal";
import { Container } from "reactstrap";

function mapStateToProps(state) {
  return {};
}

class Display extends Component {
  render() {
    return (
      <Container>
        <NotesList />
      </Container>
    );
  }
}

export default connect(mapStateToProps)(Display);
