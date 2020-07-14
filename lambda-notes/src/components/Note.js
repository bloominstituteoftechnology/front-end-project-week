import React from "react";
import { Link } from "react-router-dom";

class Note extends React.Component {

  reload = () => {
    window.location.reload();
  }

  render() {
    return (
      <div key={this.props.id} className="note-card">
        <Link to={`/show/${this.props.id}`} >
          <h2 onClick={this.reload}>{this.props.title}</h2>
        </Link>
        <p>{this.props.body}</p>
      </div>
    );
  }
}

export default Note;