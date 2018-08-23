import React, { Component } from "react";
import { Link } from "react-router-dom";

class EditNote extends Component {
  constructor(props) {
    super(props);
    console.log("EDIT NOTE", this.props.notes);
    this.state = {
      allNotes: this.props.notes
    };
  }

  render() {
    const idNumber = parseInt(this.props.match.params.id, 10);
    console.log("EDIT FORM", this.props);

    return (
      <div>
        <h2>Edit Note:</h2>
        <form
          className="editNoteForm"
          onSubmit={this.props.editNewNoteHandler}
          notenumber={idNumber}
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
          <button>Update</button>
        </form>
        <Link to="/">Home</Link>
      </div>
    );
  }
}

export default EditNote;
