import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../../css/singlenote.css";

class SingleNote extends Component {
  constructor(props) {
    super(props);
    let ID = parseInt(this.props.match.params.id, 10);
    this.state = {
      allNotes: this.props.notes,
      id: parseInt(this.props.match.params.id, 10),
      note: this.props.notes.filter(note => {
        return note.id === ID;
      }),
      successModal: this.props.successModal,
      loadingModal: this.props.loadingModal
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.notes.length !== prevProps.notes.length) {
      this.setState({ allNotes: this.props.notes });
    }
  }

  render() {
    // if statement to show modal
    if (!this.props.show) {
      return (
        <div className="singleNoteDiv">
          {this.props.renderRedirect()}
          <div className="buttonsSingleNoteDiv">
            <Link to={`/edit-note/${this.state.id}`} key={this.state.id}>
              <button className="editButton">Edit</button>
            </Link>
            <button onClick={this.props.toggleModal}>Delete</button>
          </div>
          <div className="singleNoteTextDiv">
            <h2>{this.state.note[0].title}</h2>
            <h4>{this.state.note[0].description}</h4>
          </div>
        </div>
      );
    } else {
      return (
        <div className="singleNoteDiv">
          {this.props.renderRedirect()}
          <div className="buttonsSingleNoteDiv">
            <Link to={`/edit-note/${this.state.id}`} key={this.state.id}>
              <button className="editButton">Edit</button>
            </Link>
            <button onClick={this.props.toggleModal}>Delete</button>
          </div>

          <div className="backdrop">
            <div className="modal">
              {/* convert below to if return statments */}
              {/* {this.state.loadingModal && "Loading..."}
              {this.state.successModal && "Success (make me green)"}
              {!this.state.successModal &&
                !this.state.loadingModal &&
                "Here's some text for the modal"} */}
              <h4>Are you sure you want to delete this?</h4>
              <div className=".modalButtonsDiv">
                <button
                  deletenotenumber={this.state.id}
                  onClick={this.props.deleteNoteHandler}
                >
                  Delete
                </button>
                <button onClick={this.props.toggleModal}>No</button>
              </div>
            </div>
          </div>

          <div className="singleNoteTextDiv">
            <h2>{this.state.note[0].title}</h2>
            <h4>{this.state.note[0].description}</h4>
          </div>
        </div>
      );
    }
  }
}

export default SingleNote;
