import React from "react";
// import { Link } from "react-router-dom";

const EditNote = props => {
  console.log(`${props.title} ${props.textbody}`);
  return (
    <form className="editNote-container">
      <input
        className="note-title-input"
        type="text"
        name="title"
        placeholder="Note Title"
        onChange={props.onChange}
        value={props.title}
      />
      <input
        className="note-content-input"
        type="text"
        name="textbody"
        placeholder="Note Content"
        onChange={props.onChange}
        value={props.textbody}
      />
      {/* <Link to="/notes"> */}
      <div onClick={event => props.editNote(event, props.match.params.id, props.history.push)} className="save-button">Save</div>
      {/* </Link> */}
    </form>
  );
};

export default EditNote;

// asdfasdf
//look up prevState to have the old note in the field for editing
