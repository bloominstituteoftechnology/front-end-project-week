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

  inputChangeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    console.log("TITLE", this.state.title);
    console.log("DESCRIPTION", this.state.description);
    return (
      <div>
        <h2>New Note:</h2>
        <form className="newNoteForm">
          <input
            placehold="Note Title"
            name="title"
            onChange={this.inputChangeHandler}
          />
          <input
            placehold="Note Content"
            name="description"
            onChange={this.inputChangeHandler}
          />
          <button>Update</button>
        </form>
      </div>
    );
  }
}

export default NewNote;
