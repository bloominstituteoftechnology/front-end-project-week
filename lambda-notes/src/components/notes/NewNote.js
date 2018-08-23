import React, { Component } from "react";

import "../../css/newnote.css";

class NewNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allNotes: this.props.notes
    };
  }

  render() {
    return (
      <div className="newNoteMainDiv">
        {this.props.renderRedirect()}
        <h2>New Note:</h2>
        <form
          className="newNoteForm"
          onSubmit={this.props.submitNewNoteHandler}
        >
          <input
            placehold="Note Title"
            name="title"
            onChange={this.props.inputChangeHandler}
            className="inputTitle"
          />
          <input
            placehold="Note Content"
            name="description"
            onChange={this.props.inputChangeHandler}
            className="inputDescription"
          />
          <button>Save</button>
        </form>
      </div>
    );
  }
}

export default NewNote;
