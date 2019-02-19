import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NoteList extends Component {
  constructor(props) {
    super(props);
  }

  truncateString(str, num) {
    return str.length >= 75 || num <= 75
      ? str.slice(0, num) + "..."
      : str.length <= num
      ? str
      : str.slice(0, num) + "...";
  }
  render() {
    return (
      <div>
        <h1>Your Notes:</h1>
        <div className="notelist">
          {this.props.notes.map(note => {
            return (
              <>
                <div className="fullnote">
                  <div className="note">
                    <h1 className="notetitle">{note.title}</h1>
                    <div className="notetext">
                    <p>{this.truncateString(note.textBody, 90)}</p>
                    </div>
                  </div>
                  <NavLink
                    className="viewnotebutton"
                    to={`/viewnote/${note.id}`}
                    key={note.id}
                  >
                    View full note
                  </NavLink>
                </div>
              </>
            );
          })}
        </div>
      </div>
    );
  }
}

export default NoteList;
