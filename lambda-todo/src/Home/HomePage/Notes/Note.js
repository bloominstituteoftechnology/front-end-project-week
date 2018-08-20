import React from "react";
import './Note.css'; 

const Note = props => {
  return (
    <div className="note-card">
      {props.note.map((item) => {
          return(
        <div key={item.id}>
          <div className="card">
            <div className="title"><h2>{item.title}</h2></div>
            <div className="content"><p>{item.cardcontent}</p></div>
          </div>
        </div>
          )
      })}
    </div>
  );
};

export default Note;
