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

  //   handleSubmit = (e, newNote) => {
  //     e.preventDefault();
  //     const {tags, title, textBody} = this.state;
  //     const newNote = {tags, title, textBody};
  //     this.props.addNewNote(newNote);
  //   };

  addNewNote = e => {
    e.preventDefault();
    const newNote = {
      tags: this.state.tags,
      title: this.state.title,
      textBody: this.state.textBody
    };
    axios
      .post("https://killer-notes.herokuapp.com/note/create", newNote)
      .then(this.setState({tags: [], title: "", textBody: ""}))
      .then(this.props.fetchNotes());
  };

  render() {
    return (
      <div className="new-note">
        <h2>Create New Note:</h2>
        <form onSubmit={this.addNewNote}>
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
          <button>Save</button>
          <Link to="/all">
            <button>Cancel</button>
          </Link>
        </form>
      </div>
    );
  }
}

export default NewNote;
