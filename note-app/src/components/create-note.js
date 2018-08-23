import React, { Component } from "react";
import { Link } from "react-router-dom";
import moment from 'moment';

import SideBar from "./side-bar";

class CreateNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      textBody: "",
      tags: ""
    };
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  gatherCreation = () => {
    const id = this.props.idGenerator();
    const time = moment(Date.now())
    const tags = this.state.tags.split(/[ ,]+/).length
      ? this.state.tags.split(/[ ,]+/)
      : [];
    const obj = {
      id,
      tags,
      title: this.state.title,
      textBody: this.state.textBody,
      __v: 0,
      time,
      length: this.state.textBody.length
    };
    this.setState({ title: "", textBody: "", tags: "" });
    this.props.create(obj);
  };

  render() {
    return (
      <div className="main-container">
        <SideBar />
        <div className="create-note-form">
          <h3>Create New Note:</h3>
          <textarea
            onChange={this.onChange}
            className="input-title"
            type="text"
            placeholder="Note Title"
            name="title"
            value={this.state.title}
          />
          <br />
          <textarea
            onChange={this.onChange}
            className="input-content"
            type="text"
            placeholder="Note Content"
            name="textBody"
            value={this.state.textBody}
          />
          <br />
          <textarea
            onChange={this.onChange}
            className="input-title input-tags"
            name="tags"
            value={this.state.tags}
            placeholder="seperate tags by comma or space"
          />
          <br />
          <Link to="/">
            <button onClick={this.gatherCreation} className="btn-side-bar">
              Save
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default CreateNote;
