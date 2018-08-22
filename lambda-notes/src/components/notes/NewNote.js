import React, { Component } from "react";

class NewNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allNotes: props.notes
    };
  }

  render() {
    return (
      <div>
        <h2>New Note:</h2>
        <form className="newNoteForm">
          <input placehold="Note Title" />
          <input placehold="Note Content" />
          <button>Update</button>
        </form>
      </div>
    );
  }
}

export default NewNote;
