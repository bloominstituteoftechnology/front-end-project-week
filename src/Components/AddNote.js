import React, { Component } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

import './Content.css';
import './AddNote.css';

export class AddNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '' 
    }
  }

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = e => {
    axios
      .post('https://shawn-stewarts-private-data.herokuapp.com/notes', { "title": this.state.title, "contents": this.state.content })
      .then(response => {
        console.log('post response', response);
      })
      .catch(err => {
        console.log('Error posting note', err);
      });
  }

  render() {
    return(
      <div className='Content__Wrapper'>
        <h3 className='Content__Heading'>Create New Note:</h3>
        <div className='Content AddNote'>
          <input
            className='AddNote__Title'
            type='text'
            placeholder='Note Title'
            name='title'
            value={this.state.title}
            onChange={this.handleInput}
          />
          <textarea
            className='AddNote__Content'
            type='text'
            placeholder='Note Content'
            name='content'
            value={this.state.content}
            onChange={this.handleInput}
          />
          <NavLink to='/notes' onClick={this.handleSubmit} className='AddNote__Link'><button className='AddNote__Save'>Save</button></NavLink>
        </div>
      </div>
    );
  }
}