import React from "react";
import ReactMarkdown from "react-markdown";
import { SortableElement } from "react-sortable-hoc";

function ellipsify(str) {
  if (str.length > 200) {
    return str.substring(0, 200) + "...";
  } else {
    return str;
  }
}

function ellipsifyTitle(str) {
  if (str.length > 40) {
    return str.substring(0, 40) + "...";
  } else {
    return str;
  }
}

const NoteCard = SortableElement(props => {
  return (
    <div className="notecard" onClick={() => props.viewNote(props.note.id)}>
      <h5 className="note-title">{ellipsifyTitle(props.note.title)}</h5>
      <ReactMarkdown source={ellipsify(props.note.text)} escapeHtml={false} />
    </div>
  );
});

export default NoteCard;
