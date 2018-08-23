import React, { Component } from "react";
import { Link } from "react-router-dom";

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
        <form
          className="newNoteForm"
          onSubmit={this.props.submitNewNoteHandler}
        >
          <input
            placehold="Note Title"
            name="title"
            onChange={this.props.inputChangeHandler}
          />
          <input
            placehold="Note Content"
            name="description"
            onChange={this.props.inputChangeHandler}
          />
          <button>Save</button>
        </form>
        <Link to="/">Home</Link>
      </div>
    );
  }
}

export default NewNote;
