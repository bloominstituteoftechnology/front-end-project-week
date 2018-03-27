import React, { Component } from "react";

class CreateNewView extends Component {
  constructor() {
    super();
    this.state = {
      note: {
        title: "",
        content: ""
      }
    };

    this.handleSub = this.handleSub.bind(this);
    this.handleIn = this.handleIn.bind(this);
  }

  render() {
    return (
      <div>
        <h1>Create New Note:</h1>
        <form onSubmit={this.handleSub}>
          <label>
            <input
              type="text"
              name="title"
              value={this.state.note.title}
              onChange={this.handleIn}
              placeholder="Note Title"
              required
            />
          </label>
          <label>
            <input
              type="text"
              name="content"
              value={this.state.note.content}
              onChange={this.handleIn}
              placeholder="Note Content"
              required
            />
          </label>
          <input type="submit" value="Save" />
        </form>
      </div>
    );
  }

  handleSub(event) {
    event.preventDefault();
    console.log(this.props.notes);
  }

  handleIn(event) {
    const { name, value } = event.target;
    this.setState({
      note: {
        [name]: value
      }
    });
  }
}

export default CreateNewView;

// Returns new object with title and content to List
