import React, { Component } from "react";
import { Link } from "react-router-dom";

class SingleNote extends Component {
  constructor(props) {
    super(props);
    console.log("HEHE", props);
    this.state = {
      allNotes: props.notes
    };
  }

  render() {
    const id = parseInt(this.props.match.params.id, 10);
    console.log("ID", id);
    console.log("allNotes", this.state.allNotes);
    return (
      <div className="singleNoteDiv">
        <h2>{this.state.allNotes[id].title}</h2>
        <h2>{this.state.allNotes[id].description}</h2>
        Hey
        <Link to="/">Home</Link>
      </div>
    );
  }
}

export default SingleNote;
