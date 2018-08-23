import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../../css/editnote.css";

class EditNote extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allNotes: this.props.notes
    };
  }

  render() {
    const idNumber = parseInt(this.props.match.params.id, 10);

    return (
      <div className="editNoteMainDiv">
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
            className="inputTitle"
          />
          <input
            placehold="Note Content"
            name="description"
            onChange={this.props.inputChangeHandler}
            className="inputDescription"
          />
          <button>Update</button>
        </form>
      </div>
    );
  }
}

export default EditNote;
