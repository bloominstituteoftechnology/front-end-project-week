import React, { Component } from "react";
import { Link } from "react-router-dom";
import { SideBar } from "../sidebar/SideBar";

import "../../css/singlenote.css";

class SingleNote extends Component {
  constructor(props) {
    super(props);
    let ID = parseInt(this.props.match.params.id, 10);
    console.log("IDID", ID);
    this.state = {
      allNotes: this.props.notes,
      id: parseInt(this.props.match.params.id, 10),
      note: this.props.notes.filter(note => {
        return note.id === ID;
      })
    };
    console.log("SINGLE NOTE HANDLER", this.state.note);
    console.log("SINGLE NOTE HANDLER", this.state.allNotes);
    // this.deleteNoteHandler = this.deleteNoteHandler.bind(this);
  }

  componentDidUpdate(prevProps) {
    console.log("PREVPROPS", prevProps.notes.length);
    console.log("CURRENTPROPS", this.props.notes.length);
    if (this.props.notes.length !== prevProps.notes.length) {
      this.setState({ allNotes: this.props.notes });
    }
  }

  // this matches up with second method in main delete handler
  // removeItem(item) {
  //   this.props.deleteNoteHandler(item);
  // }

  render() {
    // let id = parseInt(this.props.match.params.id, 10);
    // let newList = this.state.allNotes.filter(note => {
    //   return note.id === id;
    // });
    // console.log("NEWLIST", newList);
    // let title = newList.title;
    // let description = newList.description;

    console.log("ID", this.state.note[0].description);
    // if statement to show modal
    if (!this.props.show) {
      return (
        <div className="singleNoteDiv">
          <SideBar />
          <Link to={`/edit-note/${this.state.id}`} key={this.state.id}>
            <button className="editButton">Edit</button>
          </Link>
          <button onClick={this.props.toggleModal}>Delete</button>
          <h2>{this.state.note[0].title}</h2>
          <h2>{this.state.note[0].description}</h2>
          <Link to="/">Home</Link>
        </div>
      );
    } else {
      return (
        <div className="singleNoteDiv">
          <SideBar />
          <Link to={`/edit-note/${this.state.id}`} key={this.state.id}>
            <button className="editButton">Edit</button>
          </Link>
          <button onClick={this.props.toggleModal}>Delete</button>

          <div className="backdrop">
            <div className="modal">
              {this.props.children}

              <div>
                <button
                  deletenotenumber={this.state.id}
                  onClick={this.props.deleteNoteHandler}
                  // below matches with second method in delete handler
                  // onClick={() => this.removeItem(id)}
                >
                  Deleteinside
                </button>
                <button onClick={this.props.toggleModal}>Cancel</button>
              </div>
            </div>
          </div>

          <h2>{this.state.note[0].title}</h2>
          <h2>{this.state.note[0].description}</h2>
          <Link to="/">Home</Link>
        </div>
      );
    }
  }
}

export default SingleNote;
