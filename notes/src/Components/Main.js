import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import SearchBar from './SearchBar';
import Export from './Export';
import Card from './Card';


export default class Main extends Component {
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
  retrieveQuery = query => {
    this.setState({ query });
  }
  render() {
    let { notes, query } = this.state;
    notes = notes.filter(note => {
      return note.title.toLowerCase().indexOf(query) > -1;
    });
    return (
      <div className="flex-container">
        <div className="title">
          <h2>Your Notes:</h2>
          <SearchBar retrieve={this.retrieveQuery}/>
          <Export notes={notes} />
        </div>
        <ul className="notes-list">
          {notes.map((note, i) => {
            return(
              <Link key={i} to={`note/${note.id}`} className="note-card">
                <Card note={note} />
              </Link>
            );
          })}
        </ul>  
      </div>
    );
  }
}