import React from "react";


import '../styles/App.css';
import "../styles/Sidebar.css";
import "../styles/CreateNote.css";

export default class CreateNote extends React.Component {
  
  newNote = e => {
    e.preventDefault();
    this.props.addNote(e)
    this.props.history.push("/");
  }

  render() {
    return (
      <div className="componentContainer">
        <h2>Create New Note:</h2>
        <form onSubmit={this.newNote} method="post">
          <input
            type="text"
            name="title"
            value={this.props.newNote.title}
            onChange={this.props.inputChange}
            placeholder="Note Title"
          />
          <textarea
            cols="50"
            rows="25"
            name="textBody"
            value={this.props.newNote.textBody}
            onChange={this.props.inputChange}
            placeholder="Note Content"
          />

          <button type="submit" className="sidebarButton createButton">Save</button>
        </form>
      </div>
    );
  }
}
