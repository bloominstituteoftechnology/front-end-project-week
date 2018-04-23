import React, { Component } from "react";

const NoteView = props => {
  let id = props.match.params.id;
  let note = props.notes.filter((note, index) => index === id - 1);
  if (note[0] !== null && note[0] !== undefined) {
    return (
      <div>
        {note[0].title}
        <br />
        <br />
        {note[0].content}
      </div>
    );
  } else return <div>There is no note with that id!</div>;
};

export default NoteView;
