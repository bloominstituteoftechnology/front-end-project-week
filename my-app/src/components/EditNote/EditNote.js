import React, { Component } from "react";
import SideMenu from "../SideMenu/SideMenu";
import "../CreateNote/CreateNote.css";
import axios from "axios";

const URL = "https://killer-notes.herokuapp.com/note/edit/id";

class EditNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      textBody: "",
      id: "",
    };
  }

  editNote = e => {
      e.preventDefault();
      const editNote = {
          tite: this.state.title,
          textBody: this.state.textBody,
      };
      axios
        .put(URL, editNote)
        .then(response => {
            this.props.updateHandle(response.data.id);
            this.setState({
                title: "",
                textBody: "",
                id: "",
            });
        })
        .catch(err => console.log("Error", err));
  }

  handleInputChange = e => {
      this.setState({ [e.target.title]: e.target.value });
  }

  render() {
    return (
      <div>
        <div>
          <SideMenu />
        </div>
        <div className="addNoteForm">
          <form onSubmit={this.newNote}>
            <input
              onChange={this.handleInputChange}
              placeholder="Note Title"
              value={this.state.tite}
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
