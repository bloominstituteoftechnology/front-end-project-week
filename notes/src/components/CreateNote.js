import React from "react";


import '../styles/App.css';
import "../styles/Sidebar.css";
import "../styles/CreateNote.css";

export default class CreateNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTitle: "",
      newText: ""
    };
  }

  inputHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    this.props.saveNote(this.state.newTitle, this.state.newText);
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="componentContainer">
        <h2>Create New Note:</h2>
        <form onSubmit={this.submitHandler} method="post">
          <input
            type="text"
            name="newTitle"
            value={this.state.newTitle}
            onChange={this.inputHandler}
            placeholder="Note Title"
          />
          <textarea
            cols="50"
            rows="25"
            name="newText"
            value={this.state.newText}
            onChange={this.inputHandler}
            placeholder="Note Content"
          />

          <button type="submit" className="sidebarButton createButton">Save</button>
        </form>
      </div>
    );
  }
}
