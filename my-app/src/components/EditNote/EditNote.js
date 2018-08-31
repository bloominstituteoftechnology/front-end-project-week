import React, { Component } from "react";
import SideMenu from "../SideMenu/SideMenu";
import "../CreateNote/CreateNote.css";
import axios from "axios";

const URL = "https://killer-notes.herokuapp.com/note/edit/";

class EditNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      textBody: "",
    };
  }

  editNote = e => {
    e.preventDefault();
    const editNote = {
      title: this.state.title,
      textBody: this.state.textBody
    };
    axios
      .put(`${URL}${this.props.match.params.monkey}`, editNote)
      .then(response => {
        this.props.updateHandle(response.data);
        this.setState({
          title: "",
          textBody: "",
        });
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
          <form onSubmit={this.editNote}>
            <h1>Edit Note</h1>
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
            <button type="submit">Update</button>
          </form>
        </div>
      </div>
    );
  }
}

export default EditNote;
