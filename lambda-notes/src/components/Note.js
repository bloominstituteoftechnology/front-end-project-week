import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react';
import { SortableElement } from 'react-sortable-hoc';

import "./Note.css";

const Note = SortableElement (props => {
  return (
    <Link to={"/view"} onClick={() => {props.handleNoteIndex(props.note.id)}}>
      <li className="Note">
        <div className="Note-NoteTitle">
          <h2>{props.note.title}</h2> <br />
        </div>
        <div className="Note-NoteBody">
          <ReactMarkdown source={props.note.body} />
        </div>
      </li>
    </Link>
  );
});

export default Note;