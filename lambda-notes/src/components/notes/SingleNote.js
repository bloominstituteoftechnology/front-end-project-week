import React, { Component } from "react";
import { Link } from "react-router-dom";
import { SideBar } from "../sidebar/SideBar";

import "../../css/singlenote.css";

class SingleNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allNotes: props.notes
    };
  }

  render() {
    const id = parseInt(this.props.match.params.id, 10);
    // if statement to show modal
    if (!this.props.show) {
      return (
        <div className="singleNoteDiv">
          <SideBar />
          <Link to={`/edit-note/${id}`} key={id}>
            <button className="editButton">Edit</button>
          </Link>
          <button onClick={this.props.toggleModal}>Delete</button>
          <h2>{this.state.allNotes[id].title}</h2>
          <h2>{this.state.allNotes[id].description}</h2>
          <Link to="/">Home</Link>
        </div>
      );
    } else {
      return (
        <div className="singleNoteDiv">
          <SideBar />
          <Link to={`/edit-note/${id}`} key={id}>
            <button className="editButton">Edit</button>
          </Link>
          <button onClick={this.props.toggleModal}>Delete</button>

          <div className="backdrop">
            <div className="modal">
              {this.props.children}

              <div>
                <button
                // onClick={() =>
                //   this.props.deleteNoteHandler(this.props.deleteNumber) &
                //   this.props.onApprove()
                // }
                >
                  Deleteinside
                </button>
                <button onClick={this.props.toggleModal}>Cancel</button>
              </div>
            </div>
          </div>

          <h2>{this.state.allNotes[id].title}</h2>
          <h2>{this.state.allNotes[id].description}</h2>
          <Link to="/">Home</Link>
        </div>
      );
    }
  }
}

export default SingleNote;
