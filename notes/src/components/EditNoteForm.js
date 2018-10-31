import React, { Component } from "react";

class EditNoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      textBody: ""
    };
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  helper = e => {
    this.props.editNote(e, this.props.id, this.state);
    this.setState({ title: "", textBody: "" });
    this.props.history.push("/");
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <div className="notes-header">
          <h3>Edit Note:</h3>
        </div>
        <form onSubmit={this.helper}>
          <input
            className="form-note-title"
            name="title"
            value={this.state.title}
            onChange={this.changeHandler}
            type="text"
            placeholder="Note Title"
          />
          <textarea
            className="form-note-content"
            name="textBody"
            value={this.state.textBody}
            onChange={this.changeHandler}
            type="text"
            placeholder="Note Content"
          />
          <button className="form-button">Save</button>
        </form>
      </div>
    );
  }
}

export default EditNoteForm;
