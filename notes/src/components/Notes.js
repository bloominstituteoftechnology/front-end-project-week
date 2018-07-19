import React from "react";
import { connect } from "react-redux";
import Note from "./Note";

const Notes = props => {
  return (
    <div className="notesList">
      <p>Log Out</p>
      <h2>Your Notes: </h2>
      <form className="notesSearch">
        <input placeholder="Search Note..." />
      </form>
      <div className="cards">
        {props.notes.map(note => {
          return <Note key={Math.random()} note={note} />;
        })}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    notes: state.notes
  };
};

export default connect(
  mapStateToProps,
  {}
)(Notes);
