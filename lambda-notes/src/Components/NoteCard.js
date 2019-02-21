import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { Card, Button } from "react-bootstrap";

const NoteCard = ({ note }) => {

  return (
    <div>
      <Card.Body>
        <Link
          to={`note/${note.id}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <div>{note.title}</div>
        </Link>
        <hr />
        <div>{note.textBody}</div>
        <div>
          <Link to={`/note/${note.id}/edit`} style={{ color: "black" }}>
            <Button variant="info" style={{ width: "75px" }}>
              Edit
            </Button>
          </Link>
        </div>
      </Card.Body>
    </div>
  );
};

const mapStateToProps = state => ({
  notes: state.noteReducer.notes
});

export default connect(
  mapStateToProps,
  {  }
)(NoteCard);