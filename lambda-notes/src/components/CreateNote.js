import React, { Component } from "react";

class CreateNote extends Component {
  state = {
    name: "",
    text: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ name: "", text: "" });
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="CreateNote">
        <h4 className="title">Create New Note:</h4>
        <form>
          <input
            className="newTitle"
            type="text"
            name="name"
            placeholder="New Title"
            onChange={this.handleChange}
            value={this.state.name}
          />
          <input
            className="newContent"
            type="text"
            name="text"
            placeholder="New Content"
            onChange={this.handleChange}
            value={this.state.text}
          />
        </form>
        <button className="save" onClick={this.handleSubmit}>
          Save
        </button>
      </div>
    );
  }
}

export default CreateNote;
