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
    console.log("Single Note ID", id);
    return (
      <div className="singleNoteDiv">
        <SideBar />
        <Link to={`/edit-note/${id}`} key={id}>
          <button className="editButton">Edit</button>
        </Link>
        <h2>{this.state.allNotes[id].title}</h2>
        <h2>{this.state.allNotes[id].description}</h2>
        <Link to="/">Home</Link>
      </div>
    );
  }
}

export default SingleNote;
