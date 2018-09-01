import React, { Component } from "react";
import "./index.css";

class CreateNote extends Component {
  state = {};
  render() {
    return (
      <div classname="noteView_container">
        <div className="noteView_topContent">
          <h3 className="content_header">Create New Note:</h3>
          <div>
            <a href="#" className="edit_delete">
              edit
            </a>
            <a href="#" className="edit_delete">
              delete
            </a>
          </div>
        </div>
        <div className="createNote_form" />
        <input
          type="text"
          className="createNote_title"
          placeholder="Note Title"
        />
        <textarea
          className="createNote_body"
          placeholder="Note Content"
          rows="20"
        />
        <a href="#" className='button_link'>
          <div className="nav_button createNote_button">Save</div>
        </a>
      </div>
    );
  }
}

export default CreateNote;
