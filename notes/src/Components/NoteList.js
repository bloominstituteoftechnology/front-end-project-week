import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown'
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
    this.setState({
      notes: this.state.notes.filter(note => {
        return note.title.toLowerCase().indexOf(this.state.query) > -1;
      })
    })
  }
  render() {
    return (
      <div className="flex-container">
        <div className="title">
          <h2>Your Notes:</h2>
          <Search search={this.handleSearch} />
        </div>
        <ul className="notes-list">
          {this.state.notes.map((note, i) => {
            return(
              <Link key={i} to={`note/${note.id}`} className="note-card">
                <li className="note-item">
                  <h3 className="note-card-title">
                    <ReactMarkdown source={'##'+note.title.substring(0, 19)}/>
                  </h3>
                  <hr/>
                  <p className="note-card-content">
                    <ReactMarkdown source={note.content.substring(0, 120)}/> ...
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