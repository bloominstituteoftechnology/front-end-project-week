import React from "react";
import './Note.css'; 

const Note = props => {
  return (
    <div className="note-card">
      {props.note.map((index, item) => {
        <div key={index}>
          <div className="card">
            <div className="title">{item.title}</div>
            <div className="content">{item.cardcontent}</div>
          </div>
        </div>;
      })}
    </div>
  );
};

export default Note;
