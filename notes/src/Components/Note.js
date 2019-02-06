import React from "react";
import "../App.css";

class Note extends React.Component {
  render() {
    const id = this.props.id;
    const truncatedText =
      this.props.textBody.length < 121
        ? this.props.textBody
        : this.props.textBody.substring(0, 120) + "...";
    return (
      <div className="note" onClick={() => this.props.clickHandler(id)}>
        <h1>{this.props.title}</h1>
        <p className="truncate">{truncatedText}</p>
      </div>
    );
  }
}

export default Note;
