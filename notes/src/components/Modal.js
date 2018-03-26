import React, { Component } from "react";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {};
}

class Modal extends Component {
  render() {
    return <div>Modal Loaded</div>;
  }
}

export default connect(mapStateToProps)(Modal);
