import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, CardTitle, CardBody, CardText } from "reactstrap";
import { Link } from "react-router-dom";

function mapStateToProps(state) {
  return {};
}

class Note extends Component {
  render() {
    return <div>Note Loading</div>;
  }

  componentDidMount() {
    console.log(this.props.match);
  }
}

export default connect(mapStateToProps)(Note);
