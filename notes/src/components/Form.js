import React, { Component } from "react";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {};
}

class Form extends Component {
  render() {
    return <div>Form Loaded</div>;
  }
}

export default connect(mapStateToProps)(Form);
