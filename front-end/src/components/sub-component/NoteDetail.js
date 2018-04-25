import React, { Component } from "react";

import NoteCard from "./NoteCard";

export default class NoteDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: this.props.noteArray[this.props.match.params.id]
    };
  }



  render() {
    // console.log("current set state:", this.state.note);
    return (
      <div>

        <NoteCard eachNote={this.state.note} />
      </div>
    );
  }
}
