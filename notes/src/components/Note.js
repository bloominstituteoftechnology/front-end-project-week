import React, { Component } from "react";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {};
}

class Note extends Component {
  render() {
    return <div>Note Loaded</div>;
  }
}

export default connect(mapStateToProps)(Note);
