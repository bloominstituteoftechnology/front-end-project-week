import React from "react";
import Moment from "react-moment";

const NoteDetails = props => {
  return (
    <div className="container">
      <div className="card-action">
        <p> edit </p> <p> delete </p>
      </div>
      <div className="note-title">
        <h3>{props.note.title} - {props.note._id}</h3>
      </div>
      <div className="note-text">
        <h3>{props.note.textBody}</h3>
      </div>
      <div className="note-date">
        <Moment from="2018-11-19">2018-11-11T12:59-0500</Moment>
      </div>
    </div>
  );
};
export default NoteDetails;
