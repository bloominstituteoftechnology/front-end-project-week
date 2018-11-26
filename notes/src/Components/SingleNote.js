import React, { Component } from "react";
import axios from "axios";
import EditNote from "./NoteEdit";

class SingleNote extends Component {
  constructor() {
    super();
    this.state = {
      note: [],
      edit: false,
      title: "",
      textBody: "",
      id: ""
    };
  }

  componentDidMount() {
    axios
      .get(`https://fe-notes.herokuapp.com/note/get/${this.props.id}`)
      .then(response => {
        this.setState({ note: response.data });
      })
      .catch(err => console.log(err));
  }
  changeHandler = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  editNote = e => {
    e.preventDefault();
    this.setState({
      title: this.state.note.title,
      textBody: this.state.note.textBody,
      edit: true
    });
  };
  updateNote = e => {
    console.log(this.props.id);
    console.log(this.state.textBody);
    e.preventDefault();
    const note = {
      title: this.state.title,
      textBody: this.state.textBody
    };
    axios
      .put(`https://fe-notes.herokuapp.com/note/edit/${this.props.id}`, note)
      .then(response => {
        this.setState({
          note: response.data,
          edit: false
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    if (this.state.edit === false) {
      return (
        <div className="single-note">
          <div className="edit-buttons">
            <p onClick={this.editNote}>edit</p>
            <p onClick={this.props.deleteNote}>delete</p>
          </div>
          <div className="note-header">
            <h2>{this.state.note.title}</h2>
          </div>
          <p>{this.state.note.textBody}</p>
        </div>
      );
    } else {
      return (
        <EditNote
          changeHandler={this.changeHandler}
          title={this.state.title}
          textBody={this.state.textBody}
          updateNote={this.updateNote}
        />
      );
    }
  }
}

export default SingleNote;
