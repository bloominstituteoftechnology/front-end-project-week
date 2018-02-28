import React, { Component } from "react";
import { connect } from "react-redux";
import Notes from "./Notes";
import { updateSelected } from "../actions";
import { Redirect } from "react-router-dom";

class MainView extends Component {
  render() {
    return (
      <div className="MainView">
        <div className="header" />
        <h2>Your Notes:</h2>
        <div className="Notes">
          {this.props.notes.map(note => {
            return (
              <form>
                <Notes
                  key={note.id}
                  note={note}
                  onClick={() => {
                    this.props.updateSelected(note.id);
                  }}
                />
                {note.selected ? (
                  <Redirect to={`/note/${note.id}`} />
                ) : (
                  console.log("still not going through redirect", note.selected)
                )}
              </form>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state
  };
};

export default connect(mapStateToProps, { updateSelected })(MainView);
