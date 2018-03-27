import React, { Component, Fragment } from "react";
import { Form, Button } from "reactstrap";
import { Link } from "react-router-dom";

export default class NewNote extends Component {
  state = {
    title: "",
    body: ""
  };

  render() {
    return (
      <Fragment>
        <h3 className="mt-5 ml-3">Create New Note:</h3>
        <Form onSubmit={this.addNote} className="mr-5">
          <input
            onChange={this.handleTitleChange}
            className="ml-3 mb-5"
            size="40"
            type="text"
            placeholder="Enter a Title"
            value={this.state.title}
          />
          <textarea
            onChange={this.handleBodyChange}
            className="ml-3"
            rows="12"
            cols="80"
            type="text"
            placeholder="Enter a Note"
            value={this.state.data}
          />
          <Link to="/">
            <Button
              style={{ backgroundColor: "#2BC1C5" }}
              className="ml-3 mb-3"
            >
              Add Note
            </Button>
          </Link>
        </Form>
      </Fragment>
    );
  }

  handleTitleChange = event => {
    this.setState({ title: event.target.value });
  };

  handleBodyChange = event => {
    this.setState({ body: event.target.value });
  };

  addNote = event => {
    event.preventDefault();
  };
}
