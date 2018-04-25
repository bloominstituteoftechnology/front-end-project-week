import React, { Component } from "react";

const NoteCard = props => {
  // console.log("NoteCard prop:", props);
  return (
    <div>
      <h1>{props.eachNote.title}</h1>
      <div className="TextBox">{props.eachNote.content}</div>
    </div>
  );
};

export default NoteCard;
