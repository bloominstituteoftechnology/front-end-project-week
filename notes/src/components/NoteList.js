import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const NoteList = props => {
  if (props.notes) {
    return (
      <div className="note-list">
        <h2 className="your-notes">Your Notes:</h2>
        <div className="the-notes">
          <ul>
            {props.notes.map(note => {
              return (
                <div className="note">
                
                  <div key={note.id} className="title">
                    <Link to={note.id}>{note.title}</Link>
                  </div>
                  <div className="content">{note.content}</div>
                  </div>
              );
            })}
          </ul>
        </div>
      </div>
    );
  } else {
    return <h3>no note for u</h3>;
  }
};

const mapStateToProps = state => {
  return {
    notes: state.notes
  };
};

export default connect(
  mapStateToProps,
  {}
)(NoteList);