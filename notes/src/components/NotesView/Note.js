import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./note.css";

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: {},
      tags: [],
      deleteToggle: false
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:8000/api/notes/${this.props.id}`)
      .then(response => {
        console.log(response.data[0]);
        let tags = response.data[0].tags.split(",");
        this.setState({
          note: response.data[0],
          tags: tags
        });
      })
      .catch(err => {
        console.log("Error retrieving notes");
      });
  }
  render() {
    return (
      <div className="note">
        <div className="note-links">
          <Link to={`/note/${this.state.note.id}/edit`}>edit</Link>
          <a
            className="delete-btn"
            onClick={() => this.props.deleteNote(this.state.note.id)}
          >
            delete
          </a>
        </div>
        <h2>{this.state.note.title}</h2>
        <p>{this.state.note.content}</p>
        <div className="tags">
          Tags:{" "}
          {this.state.tags.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </div>
      </div>
    );
  }
}

export default Note;
