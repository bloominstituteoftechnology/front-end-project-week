import React, { Component } from 'react';
import axios from 'axios';

import './Content.css';
import './NotesList.css';

export class NotesList extends Component {
  constructor(props) {
    super(props);
    this.state = { notes: [] };
  }

  componentWillMount() {
    console.log('will mount');
    this.getNotes();
  }

  componentDidMount() {
    console.log('did mount');
  }

  getNotes = () => {
    axios
      .get('http://localhost:3333/notes')
      .then(response => {
        this.setState({ notes: response.data });
        console.log('data set to state');
      })
      .catch(err => {
        console.log('Error fetching notes', err);
      });
  }

  render() {
    console.log('rendering');
    return(
      <div className='Content__Wrapper'>
        <h3 className='Content__Heading'>Your Notes:</h3>
        <div className='Content NotesList'>
          {this.state.notes.map(aNote => {
            return(
              <div className='Note' key={aNote.id}>
                <h4 className='Note__Heading'>{aNote.title}</h4>
                <p className='Note__Content'>{aNote.content}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}