import React, { Component } from "react";
import axios from "axios";

class SingleNote extends Component {
  constructor() {
    super();
    this.state = {
      note: []
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

  render() {
    return (
      <div className="single-note">
        <div className="note-header">
          <h1>{this.state.note.title}</h1>
          <div className="edit-buttons">
            <p>edit</p>
            <p onClick={this.props.deleteNote}>delete</p>
          </div>
        </div>
        <p>{this.state.note.textBody}</p>
      </div>
    );
  }
}

export default SingleNote;
