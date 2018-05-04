import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Search from './Search';


export default class NoteList extends Component {
  state = {
    notes: [],
    query: '',
  }
  componentDidMount() {
      axios.get('http://localhost:5005/notes')
      .then(response => {
        this.setState({ notes: response.data })
      })
      .catch(error => {
        console.log(error);
      });
  }
  handleSearch = query => {
    this.setState({ query });
  }
  render() {
    const {notes, query } = this.state;
    return (
      <div className="flex-container">
        <div className="title">
          <h2>Your Notes:</h2>
          <Search search={this.handleSearch} />
        </div>
        <ul className="notes-list">
          {notes.filter(note => {
            return note.title.toLowerCase().indexOf(query) > -1;
          }).map((note, i) => {
            return(
              <Link key={i} to={`note/${note.id}`} className="note-card">
                <li className="note-item">
                  <h3 className="note-card-title">
                    {note.title.substring(0, 19)}
                  </h3>
                  <hr/>
                  <p className="note-card-content">
                    {note.content.substring(0, 120)} ...
                  </p>
                </li>
              </Link>
            );
          })}
        </ul>  
      </div>
    );
  }
}