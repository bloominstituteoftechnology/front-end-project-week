import React, { Component } from "react";
import "../App.css";
import axios from "axios";
import { Redirect } from "react-router-dom";
import {Form, Input} from 'reactstrap'

class CreateNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: props.edit,
      note: props.note,
      title: props.title,
      content: props.content,
      submitted: false
    };
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidMount() {
    if (!this.state.edit) {
      console.log("creating new note");
      this.setState({ title: "", content: "" });
    } else {
      console.log("updating note");
    }
  }

  addNote = event => {
    event.preventDefault();
    const { title, content } = this.state;
    const newNote = { title, content };

    if (this.state.edit) {
      const updatedNotes = Object.assign({}, newNote, {
        id: this.state.note.id
      });
      axios
        .put(`https://mysterious-inlet-80205.herokuapp.com/notes/${updatedNotes.id}`, updatedNotes)
        .then(res => {
          console.log(res.data);
          this.setState({ submitted: true });
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      axios
        .post("https://mysterious-inlet-80205.herokuapp.com/notes", newNote)
        .then(res => {
          console.log(res.data);
          this.setState({ title: "", content: "", submitted: true });
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  render() {
    return this.state.submitted ? (
      <Redirect to="/notes" />
    ) : (
      <div className="createnote">
        <h2 className="createheading">Edit Note:</h2>
        <Form onSubmit={this.addNote}>
          <Input
            className="notetitle"
            onChange={this.handleInputChange}
            name="title"
            type="text"
            placeholder="Note title"
            value={this.state.title}
          />
          <Input
            className="notecontent"
            type="textarea"
            onChange={this.handleInputChange}
            name="content"
            placeholder="Note content"
            value={this.state.content}
          />

          <button className="savebutton">Update</button>
        </Form>
      </div>
    );
  }
}

export default CreateNote;
