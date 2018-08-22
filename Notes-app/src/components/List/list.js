import React, { Component } from "react";
import { SideBar } from "../Sidebar/sidebar";
import "./notelist.css";
import { Note } from "./note";
import { connect } from "react-redux";
import { fetchNotes } from "../../actions";

class List extends Component {
  componentDidMount() {
    this.props.fetchNotes();
  }

  render() {
    return (
      <div className="page">
        <SideBar />
        <section>
          <h1 className="notes-title"> Your Notes: </h1>
          <div className="note-container">
            {this.props.notes.map(note => (
              <Note key={note._id} note={note} />
            ))}
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes
  };
};

export default connect(
  mapStateToProps,
  { fetchNotes }
)(List);
