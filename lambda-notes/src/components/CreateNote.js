import React, { Component } from "react";
import axios from "axios";
import "../App.css";

class CreateNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      textBody: ""
    };
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addNote = event => {
    event.preventDefault();
    const { title, textBody } = this.state
    const newNote = { title, textBody }
    
    axios
      .post("http://localhost:4444/notes", newNote)
      .then(response => {
        console.log(response.data);
        this.props.updateNotes(response.data);
      })
      .catch(err => console.log(err));
      this.setState({
        title: "",
        textBody: ""
      })
      this.props.history.push('/notes');
  };

  render() {
    return (
        <div className="createnote">
        <h2 className="createheading">Create New Note:</h2>
          <form onSubmit={this.addNote}>
              <input
              className="notetitle"
                onChange={this.handleInputChange}
                name="title"
                type="text"
                placeholder="Note title"
                value={this.state.title}
              />
              <input
              className="notecontent"
                type="textarea"
                onChange={this.handleInputChange}
                name="textBody"
                placeholder="Note content"
                value={this.state.textBody}
              />
            <button className="savebutton">Save</button>
          </form>
          </div>
    );
  }
}

export default CreateNote;
