import React from "react";
import { Link } from "react-router-dom";
import './noteCard.css';
// import { Card, CardText, CardBody, CardHeader } from "reactstrap";

const Note = props => {
  const { title, text } = props.note;
  return (
    <div className="Note__body">
        <h4><Link to={`/note/${props.note.id}`} className="Note__link">
              {title}
            </Link></h4>
          <p>{text}</p>
    </div>
  );
};

export default Note;