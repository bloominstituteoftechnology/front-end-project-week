import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Card, CardTitle, CardText } from "reactstrap";

class NotesList extends Component {
  render() {
    return (
      <Fragment>
        <h3>Your Notes:</h3>
        <div className="d-flex flex-wrap">
          {this.props.notes.map(note => (
            <Card style={{ minWidth: "23%" }} body outline key={note.id}>
              <CardTitle>{note.title}</CardTitle>
              <CardText>{note.body}</CardText>
            </Card>
          ))}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes
  };
};

export default connect(mapStateToProps)(NotesList);
