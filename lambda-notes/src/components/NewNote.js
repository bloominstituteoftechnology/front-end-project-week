import React from "react";
import axios from "axios";
import {Link} from "react-router-dom";

class NewNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: [],
      title: "",
      textBody: ""
    };
  }

  changeHandler = e => {
    this.setState({[e.target.name]: e.target.value});
  };

  newNoteHandler = newNote => {
    //  const newNote = {
    //    tags: this.state.tags,
    //    title: this.state.title,
    //    textBody: this.state.textBody
    //  };

    this.props.addNewNote(newNote);
    this.props.history.push("/notes");
    this.setState({tags: [], title: "", textBody: ""});
  };

  render() {
    return (
      <div className="new-note">
        <h2>Create New Note:</h2>
        <form onSubmit={() => this.newNoteHandler(this.state)}>
          <input
            required
            type="text"
            name="title"
            placeholder="Note Title"
            value={this.state.title}
            onChange={this.changeHandler}
          />
          <br />
          <textarea
            required
            cols="30"
            rows="10"
            name="textBody"
            placeholder="Note Content"
            value={this.state.textBody}
            onChange={this.changeHandler}
          />
          <br />
          <button type="submit">Save</button>
          <Link to="/notes">
            <button>Cancel</button>
          </Link>
        </form>
      </div>
    );
  }
}

export default NewNote;
