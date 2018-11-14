import React from "react";
import { NavLink } from "react-router-dom";

const NoteForm = props => {
  return (
    <div>
      <form className="form">
        <input
          className="input-tags"
          type="text"
          name="tags"
          value={props.value}
          onChange={props.handleInput}
          placeholder="tag"
        />

        <input
          className="input-title"
          type="text"
          name="title"
          value={props.value}
          onChange={props.handleInput}
          placeholder="Title"
        />
        <textarea
          className="input-body"
          type="textarea"
          name="textBody"
          value={props.value}
          onChange={props.handleInput}
          placeholder="Start writing..."
        />
        <NavLink
          to="/"
          activeClassName="activeNew"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <button onClick={props.handleClick}>Save</button>
        </NavLink>
      </form>
    </div>
  );
};
export default NoteForm;
