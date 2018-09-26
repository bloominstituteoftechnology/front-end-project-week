import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../../css/allnotes.css";

class AllNotes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allNotes: props.notes,
      search: props.search,
    };
  }

  render() {
    console.log("ALLNOTES", this.props.search);
    return (
      <div className="mainNotesPageDiv">
        {/* {() => this.props.renderRedirect()}; */}
        <input
          placeholder="Find your note..."
          name="search"
          onChange={this.props.searchChangeHandler}
          className="noteSearch"
          style={{ marginLeft: "4rem" }}
        />
        <h2 className="yourNotesTitle">Your Notes:</h2>
        <div className="allNotesDiv">
          {this.props.notes.map(note => {
            return (
              <Link to={`/notes/${note.id}`} className="noteCard" key={note.id}>
                <h2>
                  {note.title.length > 12
                    ? note.title.substring(0, 12) + "..."
                    : note.title}
                </h2>
                <div className="noteContent">
                  <p>
                    {note.content.length > 50
                      ? note.content.substring(0, 50) + "..."
                      : note.content}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

export default AllNotes;
