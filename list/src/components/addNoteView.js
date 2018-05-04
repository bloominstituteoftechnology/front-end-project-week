import React from "react";
import { Link } from "react-router-dom";
export const AddNoteView = props => {
  return (
    <div>
      <h2> Create New Note: </h2>
      <form id="inputForm">
        <input
          onChange={props.handleChange}
          type="text"
          name="title"
          value={props.note.title}
        />
        <input
          onChange={props.handleChange}
          type="text"
          name="body"
          value={props.note.body}
        />
        <Link to="/">
          <button type="submit" onClick={() => props.addNote()} />
        </Link>
      </form>
    </div>
  );
};
