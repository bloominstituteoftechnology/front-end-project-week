import React, { Component } from "react";
import "./index.css";

class NotesList extends Component {
  state = {
    notesArray: [
      {
        _id: "asdklfjsodijflsdkf19",
        title: "First Note",
        body: "content info",
        createdat: 157234563211
      },
      {
        _id: "asdklfjsoyyeewrkwer56903",
        title: "Second Note",
        body: "content info",
        createdat: 157234563222
      },
      {
        _id: "zaqwsxcderfv0192749",
        title: "Third Note",
        body: "content info",
        createdat: 157234563233
      }
    ]
  };
  render() {
    return (
      <div className="notesList_container">
        <div>
          <h3 className="content_header">Your Notes:</h3>
        </div>
        <div className="notesList">
          {this.state.notesArray.map((note, index) => {
            return (
              <div className="note" key={index}>
                <div>
                  <h4>{note.title}</h4>
                  <hr />
                  <p>{note.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default NotesList;
