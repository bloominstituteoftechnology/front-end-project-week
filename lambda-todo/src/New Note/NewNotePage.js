import React from "react";
import "./NewNotePage.css";
import { NavLink } from "react-router-dom";

const NewNotePage = props => {
  return (
    <div className="new-note">
      <h1>Create New Note</h1>
      <div className="new-note-inputs">
      <form onSubmit={props.handleAddNote}>
        <input
          placeholder="Title"
          type="text"
          className="title-input"
          onChange={props.handleInputChange}
          value={props.value.title}
          name="title"
        />
         <input
          placeholder="Tags"
          type="text"
          className="title-input"
          onChange={props.handleInputChange}
          value={props.value.tags}
          name="tags"
        />
        <textarea
          placeholder="Content"
          type="text"
          className="content-input"
          onChange={props.handleInputChange}
          value={props.value.content}
          name="content"
        />
        <NavLink onClick={props.handleAddNote} className="nav-btn" to="/">
          Add New Note
        </NavLink>
        </form>
      </div>
    </div>
  );
};

export default NewNotePage;
