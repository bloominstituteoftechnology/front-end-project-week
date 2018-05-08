import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown'
import axios from 'axios';

import SearchBar from './SearchBar';


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
        </div>
        <ul className="notes-list">
          {notes.map((note, i) => {
            return(
              <Link key={i} to={`note/${note.id}`} className="note-card">
                <li className="note-item">
                  <h3 className="note-card-title">
                    <ReactMarkdown source={'##' + note.title.substring(0, 19)}/>
                  </h3>
                  <hr/>
                  <p className="note-card-content">
                    <ReactMarkdown source={note.content.substring(0, 120) + '...'}/>
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