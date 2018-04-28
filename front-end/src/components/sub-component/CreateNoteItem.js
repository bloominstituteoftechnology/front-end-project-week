import "./CreateNoteItem.css";

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

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
          <div className="createInputTitle">
            <input
              className="form-control"
              type="text"
              placeholder="Title"
              name="title"
              value={this.state.title}
              onChange={e => this.setState({ [e.target.name]: e.target.value })}
            />
          </div>
          <div className="createInputContent">
            <textarea
              className="form-control"
              type="text"
              placeholder="Write your note here!"
              name="content"
              rows="10"
              value={this.state.content}
              onChange={e => this.setState({ [e.target.name]: e.target.value })}
            />
          </div>
          <div className="createSaveButton">
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button
                className="btn-warning btn-lg btn-block"
                onClick={() => {
                  this.props.mainProps.createNote({
                    title: this.state.title,
                    content: this.state.content
                  });
                  this.setState({ title: "", content: "" });
                }}
              >
                Save
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateNoteItem;
