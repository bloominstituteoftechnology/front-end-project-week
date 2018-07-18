import React from "react";
import { Card, CardTitle, CardText } from "reactstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchSingleNote } from "../actions/action";

const Note = props => {
  return (
    <div className="ind-card">
      <Link
        onClick={() =>
          props.fetchSingleNote(props.note._id)
        }
        to={`/note/${props.note._id}`}
      >
        <Card>
          <CardTitle>{props.note.title}</CardTitle>
          <CardText>{props.note.textBody}</CardText>
        </Card>
      </Link>
    </div>
  );
};

export default connect(
  null,
  { fetchSingleNote }
)(Note);
