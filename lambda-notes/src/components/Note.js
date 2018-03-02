import React, { Component } from 'react';
import axios from 'axios';
import './Note.css';

class Note extends Component {
  state = {
    title: '',
    content: '',
  };

  constructor(props) {
    super(props);
    this.processDelete = this.processDelete.bind(this);
  }

  toggleDeleteModal() {
    document.getElementById('delete-modal').classList.toggle('delete-modal--display');
    document.getElementById('opaque-shield').classList.toggle('opaque-shield--display');
  }

  processDelete() {
    axios.delete(`http://localhost:4444/notes/${this.props.match.params.id}`).then(() => {
      window.location.href = '/';
    })
    .catch((error) => {
      alert('Server error: Please try again later.');
      this.toggleDeleteModal();
    });
  }

  redirectEdit() {
    window.location.href = `edit/${this.props.match.params.id}`;
  }
  
  componentDidMount() {
    axios.get('http://localhost:4444/notes').then((response) => {
      this.setState(() => response.data.find(note => note.id === Number(this.props.match.params.id)));
    })
    .catch((error) => {
      alert(error);
      window.location.href = '/';
    });
  }

  componentDidUpdate() {
    let noteHeight = window.getComputedStyle(document.getElementById('note')).getPropertyValue('height');
    noteHeight = Number(noteHeight.substring(0, noteHeight.length - 2));
    const windowHeight = document.documentElement.clientHeight;
    document.getElementById('App').style.height = (noteHeight + 107 > windowHeight) ? `${noteHeight + 107}px` :
      '100%';
  }

  render() {
    return (
      <div>
        <div className="note" id="note">
          <div className="note__link note__edit-link" onClick={this.redirectEdit}>edit</div>
          <div className="note__link note__delete-link" onClick={this.toggleDeleteModal}>delete</div>
          <div className="note__title">{this.state.title}</div>
          <div className="note__content">{this.state.content}</div>
        </div>
        <div className="delete-modal" id="delete-modal">
          <div className="delete-modal__warning">Are you sure you want to delete this?</div>
          <div className="delete-modal__button delete-modal__delete-button" onClick={this.processDelete}>
            Delete
          </div>
          <div className="delete-modal__button delete-modal__cancel-button" onClick={this.toggleDeleteModal}>
            No
          </div>
        </div>
      </div>
    );
  }
}

export default Note;
