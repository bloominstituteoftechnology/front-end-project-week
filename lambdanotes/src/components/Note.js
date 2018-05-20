import React, { Component } from 'react';
import axios from 'axios';
import './Note.css';
import { Link } from 'react-router-dom';

export default class Note extends Component {
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
      .get(`http://localhost:7777/notes/${this.props.match.params.id}`)
      .then(response => {
        this.setState({ note: response.data })
      })
      .catch(err => {
        console.log('Error fetching notes', err);
      });
  }

  OpenModal = () => {
    this.setState({ modal: true });
  }

  CloseModal = event => {
    let modal = document.getElementById('ModalOverlay');
    let cancel = document.getElementById('CancelDelete');
    if (event.target === modal || event.target === cancel) {
      this.setState({ modal: false });
    }
  }

  handleDelete = () => {
    axios
      .delete(`http://localhost:7777/notes/${this.props.match.params.id}`)
      .then(response => {
        console.log('Delete response', response);
      })
      .catch(err => {
        console.log('Error deleting note', err);
      });
  }

  render () {    
    return (
      <div className= 'singleNote'>
        <div className = 'sNoteOptions'>
          <Link className = 'sNoteEdit' to={`/edit`}>edit</Link>
          <div className = 'sNoteDelete' onClick = {this.OpenModal}>delete</div>
        </div>

        {this.state.modal === true ? 
        <div className='sNoteModalOverlay' id='ModalOverlay' onClick={this.CloseModal}>
          <div className='sNoteModal'>
            <div className='sNoteModalMessage'><h5>Are you sure you want to delete this note?</h5></div>
            <div className='sNoteModalButtons'>
              <Link to='/notes' className='sNoteDeleteButtonW' onClick={this.handleDelete}>
                <button className='sNoteDeleteButtonC'>Delete</button>
              </Link>
              <button className='sNoteEditButtonC' id='CancelDelete' onClick={this.CloseModal}>No</button>
            </div>
          </div>
        </div> : null }

        <div className = 'sNoteContainer'>       
            <h4 className = 'sNoteTitle'>Note</h4>
            <div className = 'sNoteBody'>Bacon ipsum dolor amet turducken kevin cow ham doner. Short ribs beef ribs pork turkey pork loin. Kevin beef ribs pork loin fatback swine biltong capicola pancetta salami chuck brisket short ribs bresaola. Ham hock capicola shoulder, meatloaf turducken chuck meatball. Tail leberkas cupim, capicola picanha boudin meatloaf swine jowl ham tenderloin cow strip steak ball tip. Pork loin ribeye kevin bresaola fatback cupim short loin biltong ham.</div>
        </div>
      </div>
    )
  };
}
