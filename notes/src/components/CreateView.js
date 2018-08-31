import React, { Component } from "react";

import "./CreateView.css";

const CreateView = props => {
  return (
    <div className="new-container">
      <h5 className="create-header">Create New Note: </h5>
      <form className="note-form" onSubmit={props.submitNewNote}>
        <div>
          <input
            type="text"
            placeholder="Note Title"
            name="title"
            value={props.title}
            onChange={props.noteHandler}
            className="title-input"
          />
        </div>
        <div>
          <textarea
            type="text"
            placeholder="Note Content"
            name="content"
            value={this.content}
            onChange={props.noteHandler}
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
};

export default CreateView;
