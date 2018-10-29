import React from "react";
import { Link } from "react-router-dom";
import Note from "./Note";
import "./styles.css";

class ViewNotes extends React.Component {
  constructor() {
    super();
    this.state = {
      page: 1
    };
  }
  render() {
    return (
      <div className="mainSection">
        <h2 className="yourNotes">Your Notes:</h2>
        <div className="viewNotes">
          {this.props.notes.map(note => {
            return (
              <Link
                onClick={() => this.props.selectNote(note.id)}
                exact
                to={`/${note.id}`}
              >
                <Note title={note.title} content={note.content} />
              </Link>
            );
          })}
          
        </div>
      </div>
    );
  }
}

export default ViewNotes;
