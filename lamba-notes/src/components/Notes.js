import React from "react";
import { Link } from "react-router-dom";

class Notes extends React.Component {
  render() {
    return (
      <div className="notes">
        {this.props.notes.map(note => {
          return (
            <div key={note._id} className="card">
              <Link to={`/note/get/${note._id}`} deleteNote>
                <h1 className="note__title" key={note._id}>
                  {note.title}
                </h1>
              </Link>

              <hr className="card__hr" />
              <h3 className="card__text" key={note._id}>
                {note.textBody}
              </h3>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Notes;
