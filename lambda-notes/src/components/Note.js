import React, { Component } from 'react';
import axios from 'axios';
import './Note.css';

class Note extends Component {
  state = {
    title: '',
    content: '',
  };

  redirectEdit() {
    window.location.href = `edit/${this.props.match.params.id}`;
  }
  
  componentDidMount() {
    axios.get('http://localhost:4444/notes').then((response) => {
      this.setState(() => response.data.find(note => note.id === Number(this.props.match.params.id)));
    })
    .catch((error) => {
      alert('Server error: Please try again later.');
      window.location.href = '/';
    });
  }

  render() {;
    return (
      <div className="note">
        <div className="note__link note__edit-link" onClick={this.redirectEdit}>edit</div>
        <div className="note__link note__delete-link" onClick={this.props.toggleDeleteModal(
          this.props.match.params.id)}>delete</div>
        <div className="note__title">{this.state.title}</div>
        <div className="note__content">{this.state.content}</div>
      </div>
    );
  }
}

export default Note;
