import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import Note from "./Note";


const NoteRoutes = props => {
  let notes = props.notes;
  return (
    <div>
      {notes.map(note => {
        let id = note._id;
        console.log(id)
        return (
          <Route
            exact
            key={id}
            path="/note/:id"
            render={props => <Note {...props} id={note._id} note={note} />}
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = state => ({
  notes: state.notes
});

export default connect(mapStateToProps)(NoteRoutes);
