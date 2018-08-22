import React, { Component } from "react";

class NewNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allNotes: props.notes,
      title: "",
      description: ""
    };
  }

  render() {
    return (
      <div>
        <h2>New Note:</h2>
        <form className="newNoteForm">
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
          <button>Update</button>
        </form>
      </div>
    );
  }
}

export default NewNote;
