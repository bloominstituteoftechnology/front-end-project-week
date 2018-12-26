import React, { Component } from "react";
import axios from "axios";

class NoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: ""
    };
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  //Add
  handleAddNote = e => {
    const note = {
      title: this.state.title,
      content: this.state.content
    };
    axios
      .post(`${process.env.REACT_APP_API}/api/notes`, note)
      .then(response => {
        this.setState({
          title: "",
          content: ""
        });
        this.props.handleSetData(response.data);
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div className="note-form-div">
        <form>
          <h2 className="note-form-title">New Note</h2>
          <input
            name="title"
            placeholder="      Note Title"
            onChange={this.handleInputChange}
            value={this.state.title}
            type="text"
            className="note-form"
            size="40"
          />
          <br />
          <br />
          <textarea
            type="text"
            cols="70"
            rows="7"
            name="content"
            placeholder="    Note Content"
            className="note-form-content"
            onChange={this.handleInputChange}
            value={this.state.content}
          />
            <br />
            <br />
            <div className="save-cancel-div">
          <a href="/">
            <button
              type="button"
              onClick={this.handleAddNote}
              className="save-button"
              >
              Save
            </button>
          </a>
          
          <a href="/">
            <button
              type="button"
              className="save-button"
              >
              Cancel
            </button>
          </a>
        </div>

        </form>
      </div>
    );
  }
}
// }

export default NoteForm;
