import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

class AllNotes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allNotes: props.notes
    };
  }

  render() {
    return (
      <Fragment>
        {this.state.allNotes.map(note => {
          return (
            <Link to={`/notes/${note.id}`} className="noteCard" key={note.id}>
              <p>{note.title}</p>
              <p>{note.description}</p>
            </Link>
          );
        })}
      </Fragment>
    );
  }
}

export default AllNotes;
