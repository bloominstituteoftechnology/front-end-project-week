import React, { Component } from "react";

import "./CreateView.css";

class CreateView extends Component {
  render() {
    return (
      <div className="new-container">
        <h5 className="create-header">Create New Note: </h5>
        <form className="note-form" onSubmit={this.props.onSubmit}>
          <div>
            <input
              type="text"
              placeholder="Note Title"
              name="title"
              value={this.props.title}
              onChange={this.props.onChange}
              className="title-input"
            />
          </div>
          <div>
            <textarea
              type="text"
              placeholder="Note Content"
              name="content"
              value={this.props.content}
              onChange={this.props.onChange}
              className="content-input"
            />
          </div>
          <div>
            <button type="submit" className="save-button">
              Save
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateView;
