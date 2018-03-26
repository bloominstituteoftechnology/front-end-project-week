import React, { Component } from "react";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {};
}

class Nav extends Component {
  render() {
    return <div>Nav Loaded</div>;
  }
}

export default connect(mapStateToProps)(Nav);
