import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "reactstrap";

function mapStateToProps(state) {
  return {};
}

class Nav extends Component {
  render() {
    return (
      <div>
        <h1>Lambda Notes</h1>
        <Button>View Your Notes</Button>
        <Button>+ Create New Note</Button>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Nav);
