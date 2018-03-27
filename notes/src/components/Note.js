import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, CardTitle, CardBody, CardText } from "reactstrap";
import { Link } from "react-router-dom";

function mapStateToProps(state) {
  return { notes: state.notes };
}

class Note extends Component {
  render() {
    const note = this.props.notes.filter(
      note => note.id == this.props.match.params.id
    )[0];
    console.log(note);
    return (
      <Card className="my-5">
        <CardBody>
          <CardTitle>{note.title}</CardTitle>
          <hr />
          <CardText>{note.note}</CardText>
        </CardBody>
      </Card>
    );
  }

  componentDidMount() {}
}

export default connect(mapStateToProps)(Note);
