import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

class NoteView extends Component {
  render() {
    return <div>NoteView Return</div>;
  }
}

export default connect()(NoteView);
