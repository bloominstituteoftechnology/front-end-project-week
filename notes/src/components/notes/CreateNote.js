import React, { Component } from "react";

class CreateNote extends Component {
  state = {
    title: "",
    content: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSumbit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSumbit}>
          <h2>Create Note</h2>
          <input
            type="text"
            name="title"
            id="title"
            value={this.state.title}
            onChange={this.handleChange}
            placeholder="Note Title"
          />
          <textarea rows="8" cols="80"
            type="text"
            name="content"
            id="content"
            value={this.state.content}
            onChange={this.handleChange}
            placeholder="Note Content"
          />
          <button type="submit">Create</button>
        </form>
      </div>
    );
  }
}

export default CreateNote;
