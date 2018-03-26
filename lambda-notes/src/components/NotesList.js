import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Card, CardTitle, CardText } from "reactstrap";

class NotesList extends Component {
  render() {
    return (
      <Fragment>
        <h3>Your Notes:</h3>
        <div className="d-flex flex-wrap justify-content-center">
          {this.props.notes.map(note => (
            <Card
              body
              className="m-3"
              style={{ height: "250px", width: "200px" }}
              outline
              key={note.id}
            >
              <CardTitle>{note.title}</CardTitle>
              <hr />
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
