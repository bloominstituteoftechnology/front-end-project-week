import React from "react";
import { Link } from "react-router-dom";
import { Markdown } from "react-showdown";

class SingleNote extends React.Component {
  render() {
    let trimText =
      this.props.note.text.length > 140
        ? this.props.note.text.slice(0, 140) + "..."
        : this.props.note.text;
    return (
      <div className="note__card">
        <Link
          to={`/viewnote/${this.props.note.id}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          <h5>{this.props.note.title}</h5>
          <hr className="ruler" />
          <div className="note__body">
            <Markdown markup={trimText} />
          </div>
        </Link>
      </div>
    );
  }
}

export default SingleNote;
