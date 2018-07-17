import React from "react";
import { connect } from "react-redux";
import Note from "./Note";

const Notes = props => {
  return (
    <div className="cards">
      {props.notes.map(note => {
        return <Note key={Math.random()} note={note} />;
      })}
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
