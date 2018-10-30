import React from "react";
import "./styles.css";

class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="note">
        <h2>{this.props.title}</h2>
        <hr />
        <p>{this.props.textBody}</p>
      </div>
    );
  }
}

export default Note;
