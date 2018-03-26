import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, CardTitle, CardBody, CardText } from "reactstrap";

function mapStateToProps(state) {
  return {};
}

class Note extends Component {
  render() {
    return (
      <Card>
        <CardBody>
          <CardTitle>{this.props.note.title}</CardTitle>
          <CardText>{this.props.note.note}</CardText>
        </CardBody>
      </Card>
    );
  }
}

export default connect(mapStateToProps)(Note);
