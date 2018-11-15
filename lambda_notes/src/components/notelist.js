import React, { Component } from "react";

class NoteList extends Component {
  constructor(props) {
    super(props);
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
                      <p>{note.textBody}</p>
                    </div>
                  </div>
                  <button>View full note</button>
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
