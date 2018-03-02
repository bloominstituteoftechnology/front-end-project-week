import React, { Component } from "react";
import { connect } from "react-redux";

class DeleteModal extends Component {
  render() {
    return (
      <div className="delete-modal">
        <div className="modaltext">Are you sure you want to delete this?</div>
        <div>
          <button
            onClick={this.props.deleteNote}
            className="button button--red"
          >
            Delete
          </button>
          <button
            onClick={this.props.cancelDelete}
            className="button button--teal"
          >
            No
          </button>
        </div>
      </div>
    );
  }
}

export default connect(null)(DeleteModal);
