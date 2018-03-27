import React, { Component } from 'react';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.css';
import './NoteList.css';

export default class NoteList extends Component {
  state = {
    notes: []
  };

  componentDidMount() {
    axios
      .get('http://localhost:5000/notes')
      .then(response => {
        this.setState({ notes: response.data });
      })
      .catch(error => {
        console.log(`There was an error getting notes: ${error}`);
      });
  }

  render() {
    return (
      <div className="container">
        <h4>Your Notes:</h4>
        <div className="row">
          {this.state.notes.map(note => {
            return (
              <div className="col-lg-4 col-md-8 col-sm-12" key={note.id}>
                <div className="card">
                  <div className="card-block">
                    <h5 className="card-title">{note.title}</h5>
                    <div className="card-text">{note.content}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
