import React from 'react';
import './ListView.css';
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";

const NoteCard = props => {
  return (
    <div className="note-card">
      <Link exact to={props.title}> <h3>{props.title}</h3></Link>
      <p>{props.textBody}</p>
    </div>
  );
};

export default NoteCard;