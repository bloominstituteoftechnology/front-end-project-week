import React from "react";

class Note extends React.Component {
  render() {
    const id = this.props.id;
    return (
      <div className="note" onClick={() => this.props.noteClickHandler(id)}>
        <h1>{this.props.title}</h1>
        <p>{this.props.textBody}</p>
      </div>
    );
  }
}

export default Note;
