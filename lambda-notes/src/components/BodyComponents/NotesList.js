import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Card, CardTitle, CardText } from "reactstrap";
import { Link } from "react-router-dom";

class NotesList extends Component {
  render() {
    return (
      <Fragment>
        <h3 className="mt-5 ml-3">Your Notes:</h3>
        <div className="d-flex flex-wrap justify-content-around">
          {this.props.notes.map(note => (
            <Link key={note.id} to={`/noteview/${note.id}`}>
              <Card
                body
                className="m-3"
                style={{ height: "250px", width: "200px" }}
                outline
              >
                <CardTitle>{note.title}</CardTitle>
                <hr />
                <CardText>{note.body}</CardText>
              </Card>
            </Link>
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
