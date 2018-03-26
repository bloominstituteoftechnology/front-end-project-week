import React, { Component } from "react";
import { connect } from "react-redux";
import NotesList from "./NotesList";
import Modal from "./Modal";
import Form from "./Form";

function mapStateToProps(state) {
  return {};
}

class Display extends Component {
  render() {
    return (
      <div>
        Display Loaded
        <NotesList />
        <Modal />
        <Form />
      </div>
    );
  }
}

export default connect(mapStateToProps)(Display);
