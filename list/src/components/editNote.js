import React from "react";
import { Link } from "react-router-dom";



export const EditNote = props => {

  return (
    <div>
      <h2> Edit Note: </h2>
      <form className="inputForm">
        <input
          onChange={props.handleChange}
          type="text"
          name="title"
          value={props.newNote.title}
        />
        <input
          onChange={props.handleChange}
          type="text"
          name="content"
          value={props.newNote.content}
        />
        <Link to="/">
          <button type="submit" onClick={() => props.editNote(props.note.id)} />
        </Link>
      </form>
    </div>
  );
};
