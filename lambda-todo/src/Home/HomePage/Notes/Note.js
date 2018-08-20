import React from "react";
import './Note.css'; 
import { NavLink } from "react-router-dom";

const Note = props => {
  return (
    <div className="note-card">
      {props.note.map((item) => {
          return(
        <div key={item.id}>
          <div className="card">
            <NavLink to={`/view-note/${item.id}`} className="title"><h2>{item.title}</h2></NavLink>
            <div className="content"><p>{item.cardcontent}</p></div>
          </div>
        </div>
          )
      })}
    </div>
  );
};

export default Note;
