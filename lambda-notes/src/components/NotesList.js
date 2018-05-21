import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchNotes } from "../actions";

class NotesList extends Component {

  componentDidMount() {
    this.props.fetchNotes();
  }

  render() {
    return (
      <div>
        <div>NotesList</div>
          {this.props.notes.map((note, index) => {
            return (
              <div>
                <h2>{note.title}</h2>
                <p>{note.content}</p>
              </div>
            )
          })}
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
        notes: state.notes
    };
  };

export default connect(mapStateToProps, { fetchNotes })(NotesList);