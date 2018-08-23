import React, { Component } from "react";
import Markdown from "react-markdown";

class NoteCard extends Component {
  render() {
    return (
      <div className="notecard">
        <div className="cardTitle">{this.props.title}</div>
        <hr />
        <Markdown
          className="cardBody"
          source={
            this.props.body.substring(0, 156) +
            (this.props.body.length > 156 ? " .." : "")
          }
        />
      </div>
    );
  }
}

export default NoteCard;
