import React from "react";
import { Link } from "react-router-dom";

class SingleNote extends React.Component {
  render() {
    return (
      <div className="note__card">
        <Link
          to={`/viewnote/${this.props.note.id}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <h5>{this.props.note.title}</h5>
          <hr className="ruler" />
          <p className="note__body">{this.props.note.text}</p>
        </Link>
      </div>
    );
  }
}

export default SingleNote;
