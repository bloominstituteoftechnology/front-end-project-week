import React, { Component } from "react";
import { Link } from "react-router-dom";
import { SideBar } from "../sidebar/SideBar";

class SingleNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allNotes: props.notes
    };
  }

  render() {
    const id = parseInt(this.props.match.params.id, 10);
    console.log("ID", id);
    console.log("propsprops", this.props.match);
    console.log("Heyyeye", this.state.allNotes);
    return (
      <div className="singleNoteDiv">
        <SideBar />
        <h2>{this.state.allNotes[id].title}</h2>
        <h2>{this.state.allNotes[id].description}</h2>
        <Link to="/">Home</Link>
      </div>
    );
  }
}

export default SingleNote;
