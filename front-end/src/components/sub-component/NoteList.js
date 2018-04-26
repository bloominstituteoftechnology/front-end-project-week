import React from "react";
import { Link } from "react-router-dom";

import NoteCard from "./NoteCard";

import "./NoteList.css";

const NoteList = props => {
  // console.log("NoteList: this.props", props);
  return (
    <div className="NoteListContainer">
      <h1 className="NoteListYN">Your Notes: </h1>
      <div className="NoteListCol row p-0 m-0">
        {props.mainProps.noteArray.map((eachNote, index) => (
          <div className="NoteCardContainer col-4 m-0 p-0" key={index}>
            <div className="NoteCard">
              <Link to={`/note/${index}`}>
                <NoteCard eachNote={eachNote} props={props} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoteList;
