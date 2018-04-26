import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

import './Content.css';
import './NoteEditor.css';

export class NoteEditor extends Component {
  constructor(props) {
    super(props);
    this.state = { id: '', title: '', content: '' };
  }

  componentDidMount() {
    this.getNote();
  }

  getNote = () => {
    axios
      .get(`http://localhost:3333/notes/${this.props.match.params.id}`)
      .then(response => {
        this.setState({ id: response.data.id, title: response.data.title, content: response.data.content })
      })
      .catch(err => {
        console.log('Error fetching notes', err);
      });
  }

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleUpdate = () => {
    axios
      .put(`http://localhost:3333/notes/${this.props.match.params.id}`, { title: this.state.title, content: this.state.content })
      .then(response => {
        console.log('Update response', response);
      })
      .catch(err => {
        console.log('Error updating note', err);
      });
  }

  render() {
    return(
      <div className='Content__Wrapper'>
        <h3 className='Content__Heading'>Edit Note:</h3>
        <div className='Content NoteEditor'>
          <input
            className='NoteEditor__Title'
            type='text'
            placeholder='Note Title'
            name='title'
            value={this.state.title}
            onChange={this.handleInput}
          />
          <textarea
            className='NoteEditor__Content'
            type='text'
            placeholder='Note Content'
            name='content'
            value={this.state.content}
            onChange={this.handleInput}
          />
          <NavLink to={`/notes/${this.state.id}`} onClick={this.handleUpdate}>
            <button className='NoteEditor__Update'>Update</button>
          </NavLink>
        </div>
      </div>
    );
  }
}