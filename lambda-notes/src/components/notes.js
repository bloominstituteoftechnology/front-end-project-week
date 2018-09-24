import React from "react";
import { Link } from "react-router-dom";
import "./Notes.css";

const searchingFor = term => {
  return function(note) {
    return note.content.toLowerCase().includes(term.toLowerCase()) || !term;
  };
};

const Notes = props => {
  console.log(props.notes);
  return (
    <div className="notes-page">
      <h2 className="page-title">Your Notes:</h2>
      <div className="search">
        <input
          onChange={props.searchHandler}
          type="text"
          name="search"
          placeholder="search"
          value={props.term}
        />
      </div>

      <i className="fas fa-sign-out-alt" onClick={props.logOut} />

      <div className="notes">
        
         {props.notes.filter(searchingFor(props.term)).map(note => ( 
          <Link key={note.id} to={`/notes/${note.id}`}>
            <div className="text">
              <h3>{note.title}</h3>
              <p>{note.content}</p>
            </div>
          </Link>
         ))}
      </div>
    </div>
  );
};


export default Notes;
