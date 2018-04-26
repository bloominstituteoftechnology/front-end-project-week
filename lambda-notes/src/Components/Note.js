import React, { Component } from 'react';
import axios from 'axios';

import './Content.css';

export class Note extends Component {
  constructor(props) {
    super(props);
    this.state = { note: {} };
  }

  componentDidMount() {
    this.getNote();
  }

  getNote = () => {
    axios
      .get(`http://localhost:3333/notes/${this.props.match.params.id}`)
      .then(response => {
        this.setState({ note: response.data })
      })
      .catch(err => {
        console.log('Error fetching notes', err);
      });
  }
  
  render() {
    return(
      <div className='Content__Wrapper'>
        <h3 className='Content__Heading'>Your Note:</h3>
        <div className='Content AddNote'>
          <input
            className='AddNote__Title'
            type='text'
            placeholder='Note Title'
            name='title'
            value={this.state.note.title}
          />
          <textarea
            className='AddNote__Content'
            type='text'
            placeholder='Note Content'
            name='content'
            value={this.state.note.content}
          />
        </div>
      </div>
    );
  }
}