import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

import './Content.css';
import './Note.css';
import './Modal.css';

export class Note extends Component {
  constructor(props) {
    super(props);
    this.state = { note: {}, modal: false };
  }

  _mounted = false;

  componentDidMount() {
    this._mounted = true;
    this.getNote();
  }

  componentDidUpdate() {
    if(this._mounted) {
      this.getNote();
      this._mounted = false;
    }
  }

  getNote = () => {
    axios
      .get(`https://shawn-stewarts-private-data.herokuapp.com/notes/${this.props.match.params.id}`)
      .then(response => {
        console.log(response);
        this.setState({ note: response.data.note })
      })
      .catch(err => {
        console.log('Error fetching notes', err);
      });
  }

  OpenModal = () => {
    this.setState({ modal: true });
  }

  CloseModal = event => {
    var modal = document.getElementById('ModalOverlay');
    var cancel = document.getElementById('CancelDelete');
    if (event.target === modal || event.target === cancel) {
      this.setState({ modal: false });
    }
  }

  handleDelete = () => {
    axios
      .delete(`https://shawn-stewarts-private-data.herokuapp.com/notes/${this.props.match.params.id}`)
      .then(response => {
        console.log('Delete response', response);
      })
      .catch(err => {
        console.log('Error deleting note', err);
      });
  }
  
  render() {
    return(
      <div className='Content__Wrapper'>
        <div className='Content__Heading NoHeading'></div>
        <div className='Content ViewNote'>
          <div className='ViewNote__Title'><p className='NoMargin'>{this.state.note.title}</p></div>
          <div className='ViewNote__Content'><p className='NoMargin'>{this.state.note.contents}</p></div>
          <div className='ViewNote__Buttons'>
            <NavLink to={`/note-editor/${this.state.note._id}`} className='ViewNote__Link'>
              <button className='ViewNote__Edit'>Edit</button>
            </NavLink>
            <button className='ViewNote__Delete' onClick={this.OpenModal}>Delete</button>
          </div>
        </div>

        {this.state.modal === true ? 
        <div id='ModalOverlay' className='Overlay' onClick={this.CloseModal}>
          <div className='Modal'>
            <div className='Modal__Message'><h5>Are you sure you want to delete this note?</h5></div>
            <div className='Modal__Buttons'>
              <NavLink to='/notes' className='ViewNote__Link' onClick={this.handleDelete}>
                <button className='ViewNote__Delete'>Delete</button>
              </NavLink>
              <button id='CancelDelete' className='ViewNote__Edit' onClick={this.CloseModal}>No</button>
            </div>
          </div>
        </div> : null }
      </div>
    );
  }
}