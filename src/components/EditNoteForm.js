import React, { Component } from "react";
import axios from "axios";

const api = "https://adamsnotes.herokuapp.com/api/notes/";

class EditNoteForm extends Component {
  constructor() {
    super();
    this.state = {
      noteTitle: "",
      noteBody: "",
      noteId: ""
      // note: null
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.fetchNote(id);
  }

  fetchNote = id => {
    const token = localStorage.getItem("jwt");
    const options = {
      headers: {
        Authorization: token
      }
    };
    axios
      .get(`${api}${id}`, options)
      .then(res =>
        this.setState({
          noteTitle: res.data[0].noteTitle,
          noteBody: res.data[0].noteBody,
          noteId: res.data[0].id
        })
      )
      .catch(res => console.log(res));
  };

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  helper = e => {
    const { noteTitle, noteBody } = this.state;
    this.props.editNote(e, this.state.noteId, { noteTitle, noteBody });
    this.setState({ noteTitle: "", noteBody: "" });
    this.props.history.push("/");
  };

  render() {
    if (!this.state.noteTitle) {
      return <p>loading</p>;
    }
    return (
      <div>
        <div className="notes-header">
          <h3>Edit Note:</h3>
        </div>
        <form onSubmit={this.helper}>
          <input
            className="form-note-title"
            name="noteTitle"
            value={this.state.noteTitle}
            onChange={this.changeHandler}
            type="text"
            placeholder="Note Title"
          />
          <textarea
            className="form-note-content"
            name="noteBody"
            value={this.state.noteBody}
            onChange={this.changeHandler}
            type="text"
            placeholder="Note Content"
          />
          <button className="form-button">Save</button>
        </form>
      </div>
    );
  }
}

export default EditNoteForm;
