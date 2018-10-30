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
          {this.props.notes.map((note, index) => {
            return (
              <div className="notesMap">
                <Note
                  title={note.title}
                  textBody={note.textBody}
                  index={index}
                />
                <Link
                  onClick={() => this.props.selectNote(index)}
                  exact
                  to={`/${index}`}
                >
                  expand
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ViewNotes;
