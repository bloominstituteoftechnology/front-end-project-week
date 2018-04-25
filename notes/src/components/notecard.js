import React from "react";

function ellipsify(str) {
  if (str.length > 200) {
    return str.substring(0, 200) + "...";
  } else {
    return str;
  }
}

function ellipsifyTitle(str) {
  if (str.length > 20) {
    return str.substring(0, 20) + "...";
  } else {
    return str;
  }
}

const NoteCard = props => {
  return (
    <div className="notecard" onClick={() => props.viewNote(props.note.id)}>
      <h5 className="note-title">{ellipsifyTitle(props.note.title)}</h5>
      <div className="notes-text-div">{ellipsify(props.note.text)}</div>
    </div>
  );
};

export default NoteCard;
