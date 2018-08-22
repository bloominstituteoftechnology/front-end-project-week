import React, { Component, Fragment } from "react";

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
            <div className="noteCard" key={note.id}>
              <p>{note.title}</p>
              <p>{note.description}</p>
            </div>
          );
        })}
      </Fragment>
    );
  }
}

export default AllNotes;
