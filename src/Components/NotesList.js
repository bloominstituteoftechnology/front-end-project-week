import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import axios from 'axios';

import './Content.css';
import './NotesList.css';

export class NotesList extends Component {
  constructor(props) {
    super(props);
    this.state = { notes: [] }
  }

  _mounted = false;

  componentDidMount() {
    this._mounted = true;
    this.getNotes();
  }

  componentDidUpdate() {
    if(this._mounted) {
      this.getNotes();
      this._mounted = false;
    }
  }

  getNotes = () => {
    axios
    .get('https://shawn-stewarts-private-data.herokuapp.com/notes')
    .then(response => {
      console.log(response);
      this.setState({ notes: response.data.notes })
    })
    .catch(err => {
      console.log('Error fetching notes', err);
    });
  }

  render() {
    return(
      <div className='Content__Wrapper'>
        <h3 className='Content__Heading'>Your Notes:</h3>
        <div className='Content NotesList'>
          {this.state.notes.map(aNote => {
            return(
              <NavLink to={`/notes/${aNote._id}`} className='Link Note' key={aNote._id}><div>
                <h4 className='Note__Heading'>{aNote.title}</h4>
                <p className='Note__Content'>{aNote.contents}</p>
              </div></NavLink>
            );
          })}
        </div>
      </div>
    );
  }
}