import React, { Component } from "react";
import NoteCard from "../NoteCard/NoteCard";
import { connect } from "react-redux";
import { fetchNote } from "../../Actions/index";
import "../ListView/ListView.css";

class ListView extends Component {
  componentDidMount() {
    this.props.fetchNote();
  }

  render() {
    return (
      <div className="ListView">
        <h4 className="List-Header">Your Notes:</h4>
        <div className="note">
          {this.props.notes.map(note => {
            return <NoteCard key={note._id} note={note} />;
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes.notes,
    fetching: state.fetchingNotes,
    success: state.success,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { fetchNote }
)(ListView);
