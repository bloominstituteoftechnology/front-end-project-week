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
              <Link
                onClick={() => this.props.selectNote(index)}
                exact
                to={`/${index}`}
              >
                <Note title={note.title} textBody={note.textBody} index={index} />
              </Link>
            );
          })}
          
        </div>
      </div>
    );
  }
}

export default ViewNotes;
