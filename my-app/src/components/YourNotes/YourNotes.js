import React from "react";
import "./YourNotes.css";

const YourNotes = props => {
  return (
    <div className="your-notes">
      <div className="text">
        <h4>Your Notes:</h4>
      </div>
      <div className="container">
        <div className="cards">
            <h3>Notes</h3>
            <hr/>
            <p>{props.notes.map(note => {
                props.note.message
            })}</p>
        </div>
      </div>
    </div>
  );
};

export default YourNotes;
