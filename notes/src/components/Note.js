import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, CardTitle, CardBody, CardText } from "reactstrap";
import { Link } from "react-router-dom";

function mapStateToProps(state) {
  return {};
}

class Note extends Component {
  render() {
    return (
      <Link to={`/${this.props.note.title}`}>
        <Card className="note">
          <CardBody>
            <CardTitle>{this.props.note.title}</CardTitle>
            <hr />
            <CardText>{this.props.note.note}</CardText>
          </CardBody>
        </Card>
      </Link>
    );
  }
}

export default connect(mapStateToProps)(Note);
