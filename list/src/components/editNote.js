import React from "react";
import { Link } from "react-router-dom";


export const EditNote = props => {
    console.log(props)
  return (
    <div>
      <h2> Edit Note: </h2>
      <form className="inputForm">
        <input
          onChange={props.note.handleChange}
          type="text"
          name="title"
          value={props.note.title}
        />
        <input
          onChange={props.note.handleChange}
          type="text"
          name="content"
          value={props.note.content}
        />
        <Link to="/">
          <button type="submit" onClick={() => props.addNote()} />
        </Link>
      </form>
    </div>
  );
};
