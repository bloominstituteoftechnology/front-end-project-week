import React from "react";
import ListCard from "./ListCard";

const List = props => {
  return (
    <div>
      {props.notes.map(note => {
        return <ListCard key={note._id} deleteNote={props.deleteNote} note={note} editNote={props.editNote} />;
      })}
    </div>
  );
};

export default List;
