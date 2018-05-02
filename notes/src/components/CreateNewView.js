import React, { Component } from "react";
import "./css/CreateNewView.css";

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
      <div className="createbox">
        <div>
          <h1 className="createbox__ele--head">Create New Note:</h1>
        </div>
        <form onSubmit={this.handleSub}>
          <div>
            <label>
              <input
                className="createbox__ele--title"
                type="text"
                name="title"
                value={this.state.note.title}
                onChange={this.handleIn}
                placeholder="Note Title"
                required
              />
            </label>
          </div>
          <div>
            <label className="createbox__ele">
              <input
                className="createbox__ele--content"
                type="text"
                name="content"
                value={this.state.note.content}
                onChange={this.handleIn}
                placeholder="Note Content"
                required
              />
            </label>
          </div>
          <div>
            <button
              className="createbox__ele--button"
              type="submit"
              value="submit"
            >
              Save
            </button>
          </div>
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
