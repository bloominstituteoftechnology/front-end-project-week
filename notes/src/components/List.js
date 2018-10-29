import React from "react";
import ListCard from "./ListCard";

const List = props => {
  return (
    <div>
      {props.notes.map(note => {
        return <ListCard key={note._id} note={note} />;
      })}
    </div>
  );
};

export default List;
