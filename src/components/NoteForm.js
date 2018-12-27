import React, { Component } from "react";
import axios from "axios";

class NoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
      notes: props.notes
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
    console.log(note)
    axios
      .post(`${process.env.REACT_APP_API}/api/notes`, note)
      .then(response => {
        this.setState({
          title: "",
          content: "",
        });

        //this is where its going wrong. When I click save, 
        // the notes array is turning into a sungular note object, 
        //instead of pushing the note into the array.
        const newData = this.props.notes
        newData.push(response.data)

        this.props.handleSetData(newData);
        this.props.history.push('/');
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
{/*           
            <div className="save-cancel-div">
          <a href="/">
            <button
              type="button"
              className="save-button"
              >
              Cancel
            </button>
          </a>
        </div> */}

            <br />
            <br />
            <button
              type="button"
              onClick={this.handleAddNote}
              className="save-button"
              >
              Save
            </button>
        </form>
      </div>
    );
  }
}
// }

export default NoteForm;
