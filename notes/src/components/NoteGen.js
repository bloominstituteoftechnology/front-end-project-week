import React from "react";

const NoteGen = props => {
  return props.dd.map((ele, i) => {
    return (
      <div className="note">
        <h1 className="noteTitle">{ele.title}</h1>
        <p className="noteContent">{ele.content}</p>
      </div>
    );
  });
};

export default NoteGen;
