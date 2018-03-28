import React, { Component } from 'react';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.css';

import './NoteView.css';

class NoteView extends Component {
  state = {
    note: []
  };

  componentDidMount() {
    const id = this.props.match.params.id;

    axios
      .get(`http://localhost:5000/notes/${id}`)
      .then(response => {
        this.setState({ note: response.data });
      })
      .catch(error => {
        console.log(`There was an error getting notes: ${error}`);
      });
  }

  render() {
    return (
      <div className="container">
        <div className="modify-buttons">
          <h5 className="edit-button">edit</h5>
          <h5 className="delete-button">delete</h5>
        </div>
        <div className="note-view">
          <h4 className="heading">{this.state.note.title}</h4>
          <p className="content">{this.state.note.content}</p>
        </div>
      </div>
    );
  }
}

export default NoteView;
