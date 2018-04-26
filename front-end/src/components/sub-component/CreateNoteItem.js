import "./CreateNoteItem.css";

import React, { Component } from "react";
import { Link } from "react-router-dom";

class CreateNoteItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: ""
    };
  }

  render() {
    console.log("CreateNote: this.props", this.props.mainProps);
    return (
      <div className="Note_Creator">
        <h1 className="CreateNoteText">Create New Note:</h1>
        <div className="CreateNoteContainer">
          <input
            type="text"
            placeholder="Title"
            name="title"
            value={this.state.title}
            onChange={e => this.setState({ [e.target.name]: e.target.value })}
          />
          <input
            type="text"
            placeholder="Content"
            name="content"
            value={this.state.content}
            onChange={e => this.setState({ [e.target.name]: e.target.value })}
          />
          <Link to="/">
            <button
              onClick={() => {
                this.props.mainProps.createNote({
                  title: this.state.title,
                  content: this.state.content
                });
                this.setState({ title: "", content: "" });
              }}
            >
              Save
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default CreateNoteItem;
