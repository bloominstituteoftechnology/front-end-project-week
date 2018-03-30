import React, { Component } from "react";
import "./ListView.css";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";

class ListView extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="NoteList">
        <div className="headerBody"><h1 className="HeaderText">Your Notes:</h1></div>
        <div className="Notes">
          {this.props.notes.map(note =>
            <div className="Note" key={note.id}>
              <Link className="noteLink" to={`/ViewNote/${note.id}`}>
                <div className="noteTitle">
                  {note.title}
                </div>
              </Link>
              <div className="noteContent">
                {note.content}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
export default ListView;
