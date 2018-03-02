import React, { Component } from "react";
import { connect } from "react-redux";
import { addNote } from "../Redux/actions";
import "./NewNote.css";
import { Button } from "react-bootstrap";

class NewNote extends Component {
  state = {
    title: "",
    body: ""
  };

  updateNote = event => {
    let { name, value } = event.target;
    this.setState({ [name]: value });
  };

  noteSubmit = event => {
    event.preventDefault();
    this.props.addNote(this.state);
    this.setState({
      title: "",
      body: ""
    });
  };

  render() {
    return (
      <div className="main-comp">
        <div className="main-comp-header">Create New Note:</div>
        <div className="main-comp-noteTitle">
          <form type="submit" onSubmit={this.noteSubmit}>
            <div className="title-div">
              <input
                type="text"
                className="title-input"
                placeholder="Note Title"
                onChange={this.updateNote}
                name="title"
                value={this.state.title}
              />
            </div>
            <div className="notebody-input">
              <textarea
                type="text"
                className="notebody-text"
                placeholder="Note Content"
                onChange={this.updateNote}
                name="body"
                value={this.state.body}
              />
            </div>
            <Button bsClass="btnex" type="submit" bsStyle="primary" bsSize="large">
              Post
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(null, { addNote })(NewNote);
