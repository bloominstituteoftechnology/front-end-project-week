import React, { Component } from "react";
import { Link } from "react-router-dom";

import Note from "./Note";
import NoteView from "./NoteView";
import ListHeader from "./ListHeader";

class NotesList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="NotesList">
        <ListHeader />

        <div>
          <ul className="list">
            {this.props.notes.map(note => {
              return (
                <Link to={`/${note._id}`} id={note._id} key={note._id}>
                  <Note
                    title={note.title}
                    id={note._id}
                    textBody={note.textBody}
                    key={note._id}
                  />
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

Note.defaultProps = {
  notes: []
};

export default NotesList;
