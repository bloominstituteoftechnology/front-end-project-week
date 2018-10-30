import React, { Component } from "react";

class AddNoteForm extends Component {
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
    this.props.addNote(e, this.state);
    this.setState({ title: "", textBody: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.helper}>
          <input name="title" value={this.state.title} onChange={this.changeHandler} type="text" />
          <textarea name="textBody" value={this.state.textBody} onChange={this.changeHandler} type="text" />
          <button>Save</button>
        </form>
      </div>
    );
  }
}

export default AddNoteForm;
