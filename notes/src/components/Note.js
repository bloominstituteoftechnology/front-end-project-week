import React from "react";
import { Card, CardTitle, CardText } from "reactstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchSingleNote } from "../actions/action";

class Note extends React.Component {
  constructor() {
    super();
    this.state = {
      note: ""
    };
  }

  render() {
    return (
      <div className="ind-card">
        <Link
          onClick={() =>
            this.props.fetchSingleNote(this.props.note.id)
          }
          to={`/note/${this.props.note.id}`}
        >
          <Card>
            <CardTitle>{this.props.note.title}</CardTitle>
            <hr />
            <CardText>{this.props.note.body}</CardText>
          </Card>
        </Link>
      </div>
    );
  }
}

export default connect(
  null,
  { fetchSingleNote }
)(Note);
