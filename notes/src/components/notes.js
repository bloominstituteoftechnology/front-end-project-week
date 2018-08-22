import React from "react";
import { Link } from "react-router-dom";
import Ministate from './ministate';

const Notes = props => {
  return (
    <div className="notes-container">
      <h2 className="yournotes">Your Notes:</h2>
      <div className="notes">
        {props.notes.map(note => <Ministate addTag={props.addTag}close={props.close}note={note}/>)}
      </div>
    </div>
  );
};

export default Notes;
