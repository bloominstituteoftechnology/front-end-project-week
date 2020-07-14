import React, { Component } from "react";
import { Link } from "react-router-dom";

class Delete extends Component {
  render() {
    return (
      <div className="delete-container">
        <div>
          <h4>Are you sure you want to delete this?</h4>
        </div>
        <div className="delete-buttons">
          <button
            onClick={() =>
              this.props.deleteNoteHandler(this.props.match.params.id)
            }
            className="delete-button1"
          >
            Delete
          </button>
          <Link to={`/note/${this.props.match.params.id}`}>
            <button
              className="delete-button2"
              onClick={() => {
                this.props.showModal();
              }}
            >
              No
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Delete;
