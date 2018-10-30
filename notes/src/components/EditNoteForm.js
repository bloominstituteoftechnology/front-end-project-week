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
    e.preventDefault();
    this.props.editNote(e, this.props.id, this.state);
    this.setState({ title: "", textBody: "" });
  };

  render() {
    return (
      <div>
        <h1>Edit Note:</h1>
        <form onSubmit={this.helper}>
          <input name="title" value={this.state.title} onChange={this.changeHandler} type="text" />
          <textarea name="textBody" value={this.state.textBody} onChange={this.changeHandler} type="text" />
          <button>Edit</button>
        </form>
      </div>
    );
  }
}

export default EditNoteForm;
