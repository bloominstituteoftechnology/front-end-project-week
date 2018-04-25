import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import LeftPanal from "./LeftPanal";

export default class NewNote extends Component {
  handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("sumbitted");
  };

  render() {
    return (
      <div className="container0">
        <LeftPanal />
        <div className="form">
          New Note:
          <form action="submit">
            <input
              type="text"
              name="title"
              value={this.state.title}
              placeholder="Note Title"
            />

            <textarea name="text" placeholder="Note Content" rows="15" />
          </form>
          <Link to="/">
            <div className="save-button">Save</div>
          </Link>
        </div>
      </div>
    );
  }
}
