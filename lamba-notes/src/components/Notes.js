import React from "react";

class Notes extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.notes.map(note => {
            return <h1 key={note._id}>{note.title}</h1>;
          })}
        </ul>
      </div>
    );
  }
}

export default Notes;
