import React, { Component } from "react";
import SideMenu from "../SideMenu/SideMenu";
import "./CreateNote.css";
import axios from "axios";

const URL = "https://killer-notes.herokuapp.com/note/create";

class CreateNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      textBody: ""
    };
  }

  addNote = e => {
    e.preventDefault();
    const newNote = {
      title: this.state.title,
      textBody: this.state.textBody,
    };
    this.setState({
      title: "",
      textBody: ""
    });
    axios
      .post(URL, newNote)
      .then(response => {        
        newNote._id = response.data.success;
        this.props.updateHandle(newNote);
        // this.props.updateHandle();
      })
      .catch(err => console.log("Error", err));
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <div>
          <SideMenu />
        </div>
        <div className="addNoteForm">
          <form onSubmit={this.addNote}>
            <h1>Create New Note</h1>
            <input
              onChange={this.handleInputChange}
              placeholder="Note Title"
              value={this.state.title}
              name="title"
            />
            <input
              className="note-content"
              onChange={this.handleInputChange}
              placeholder="Note Content"
              value={this.state.textBody}
              name="textBody"
            />
            <button type="submit">Save</button>
          </form>
        </div>
      </div>
    );
  }
}

export default CreateNote;
