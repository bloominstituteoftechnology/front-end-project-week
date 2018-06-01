import React, { Component } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

import './Content.css';
import './AddNote.css';
import './Modal.css';

export class AddNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
      modal: false
    }
  }

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = e => {
    if (this.state.title.length < 1 || this.state.content.length < 1) {
      // alert('A note requires a title and contents.');
      this.OpenModal();
      e.preventDefault();
    } else {
      axios
      .post('https://shawn-stewarts-private-data.herokuapp.com/notes', { "title": this.state.title, "contents": this.state.content })
      .then(response => {
        console.log('post response', response);
      })
      .catch(err => {
        console.log('Error posting note', err);
      });
    }
  }

  OpenModal = () => {
    this.setState({ modal: true });
  }

  CloseModal = event => {
    var modal = document.getElementById('ModalOverlay');
    var confirm = document.getElementById('ConfirmButton');
    if (event.target === modal || event.target === confirm) {
      this.setState({ modal: false });
    }
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

        {this.state.modal === true ? 
        <div id='ModalOverlay' className='Overlay' onClick={this.CloseModal}>
          <div className='Modal'>
            <div className='Modal__Message'><h5>A note requires a title and contents.</h5></div>
            <div className='Modal__Buttons'>
              <button id='ConfirmButton' className='ViewNote__Edit' onClick={this.CloseModal}>Ok</button>
            </div>
          </div>
        </div> : null }

      </div>
    );
  }
}