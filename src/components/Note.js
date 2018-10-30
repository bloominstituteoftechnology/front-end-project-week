import React from "react";
import "./styles.css";

class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="outerNoteContainer">
        <div className="note">
          <h2>{this.props.title}</h2>
          <hr />
          <p>{this.props.textBody}</p>
        </div>
      </div>
    );
  }
}

export default Note;
