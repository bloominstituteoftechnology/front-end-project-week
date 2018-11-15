import React, { Component } from "react";

class NoteList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Your Notes:</h1>
        <div>
          {this.props.notes.map(note => {
            return (
              <div className='notelist'>
                <p>{note.title}</p>
                <p>{note.textBody}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default NoteList;
