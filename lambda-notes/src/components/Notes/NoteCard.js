import React from "react";
import "../../App.css";
import {Link} from "react-router-dom";

const NoteCard = props => {
  const titleLimit = 22;
  const bodyLimit = 175;
  const dots = "...";
  // let title = props.note.title;
  // let textBody = props.note.textBody;
  let {title, textBody} = props.note;

  if (props.note.title.length > titleLimit) {
    title = title.substring(0, titleLimit) + dots;
  }

  if (textBody.length > bodyLimit) {
    textBody = textBody.substring(0, bodyLimit) + dots;
  }

  return (
    // <Link to={`/${props.note._id}`} className="note-card">
    <Link to={`/notes/${props.note.id}`} className="note-card">
      <div>
        <h2>{title}</h2> <hr />
        <p>{textBody}</p>
      </div>
      <div>
        <p>
          Tags:{" "}
          {props.tags.map(tag => (
            <span>{tag.tag}</span>
          ))}
        </p>
      </div>
    </Link>
  );
};

export default NoteCard;
