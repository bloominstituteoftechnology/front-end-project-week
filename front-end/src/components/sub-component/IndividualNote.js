import React, { Component } from "react";

const IndividualNote = props => {
  console.log("IndividualNote prop:", props);
  return (
    <div>
      <h1>{props.eachNote.title}</h1>
      <div className="TextBox">{props.eachNote.content}</div>
    </div>
  );
};

export default IndividualNote;
