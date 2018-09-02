import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./index.css";

class NotesList extends Component {
  state = {
    notesArray: [
      {
        _id: "asdklfjsodijflsdkf19",
        title: "First Note",
        body: "content info",
        createdat: 157234563211,
      },
      {
        _id: "asdklfjsoyyeewrkwer56903",
        title: "Second Note",
        body: "content info",
        createdat: 157234563222,
      },
      {
        _id: "zaqwsxcderfv0192749",
        title: "Third Note",
        body: "content info",
        createdat: 157234563233,
      },
    ]
  };

  generateNotes = (what, where) => {
    return (
      <Link to={`/note/${what._id}`} key={what._id}>
      <div className='note'>
        <div>
          <h4>{what.title}</h4>
          <hr></hr>
          <p>{what.body}</p>
        </div>
      </div>
      </Link>
    )
  }

  render() {
    return (
      <div className="notesList_container">
        <div>
          <h3 className="content_header">Your Notes:</h3>
        </div>
        <div className="notesList">
          {this.state.notesArray.map(this.generateNotes)}
        </div>
      </div>
    );
  }
}

export default NotesList;
