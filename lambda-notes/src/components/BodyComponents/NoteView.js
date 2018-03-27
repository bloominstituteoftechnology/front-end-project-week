import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class NoteView extends Component {
  render() {
    const currentNote = this.props.notes.filter(
      item => Number(item.id) === Number(this.props.match.params.id)
    )[0];
    return (
      <div>
        <div className="d-flex justify-content-end">
          <Link to={`/editnote/${currentNote.id}`}> edit </Link>
        </div>
        <h3 className="mt-4 ml-3">{currentNote.title}</h3>
        <p className="mt-5 ml-3">{currentNote.title}</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes
  };
};
export default connect(mapStateToProps)(NoteView);
