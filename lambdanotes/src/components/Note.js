import React from 'react';
import ReactMarkdown from 'react-markdown';
import { SortableElement } from 'react-sortable-hoc';

import "./Note.css";

const Note = SortableElement(({note}) => {
  return (
      <li className="Note">
        <div className="Note-NoteTitle">
          <h2>{note.title}</h2> <br />
        </div>
        <div className="Note-NoteBody">
          <ReactMarkdown source={note.body} />
        </div>
      </li>
  );
});

export default Note;
