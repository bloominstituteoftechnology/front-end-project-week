import React, { Component } from 'react';

import axios from 'axios';

import Modal from 'react-modal';
import NoteForm from './NoteForm';

class Note extends Component {
    state = {
      note: null,
      title: '',
      textBody: '',
      isEditing: false,
      modalIsOpen: false
    };
  

  componentDidMount() {
    const id = this.props.match.params.id;
    this.fetchNote(id);
  }

  fetchNote = id => {
    axios
      .get(`https://killer-notes.herokuapp.com/note/get/${id}`)
      .then(response => {
        this.setState(() => ({ note: response.data }));
      })
      .catch(error => {
        console.error(error);
      });
  };

  get id() {
    return this.props.match.params.id;
  }

  // activates delete modal
  openModal = e => {
    e.preventDefault();
    this.setState({ modalIsOpen: true });
  }

  // deactivates delete modal
  closeModal = () => {
    this.setState({ modalIsOpen: false });
  }


  handleDelete = e => {
    e.preventDefault();
    axios
      .delete(`https://killer-notes.herokuapp.com/note/delete/${this.id}`)
      .then(response => {
        this.props.fetchNotes();
        this.setState({ note: response.data,
                        title: response.data.title,
                        textBody: response.data.textBody });
        })
      .catch(error => {
        console.error(error);
      });
  this.props.history.push("/");
  }

  handleEditInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleEditNote = e => {
    e.preventDefault();

    const editedNote = {
      title: this.state.title,
      textBody: this.state.textBody
    }

    axios
      .put(`https://killer-notes.herokuapp.com/note/edit/${this.id}`, editedNote)
      .then(response => {
        this.props.fetchNotes();
        this.setState({
                        note: response.data,
                        title: response.data.title,
                        textBody: response.data.textBody,
                        isEditing: false
        });
      })
      .catch(error => {
        console.error(error);
      });
  };

toggleEdit = e => {
  e.preventDefault();
  this.setState({ isEditing: true});
}

  render() {
    if(!this.state.note) {
      return(<div>Loading Note...</div>);
    }
  
    const { title, textBody } = this.state.note;

     if (this.state.isEditing) {
      return (
        <NoteForm 
              title={this.state.title}
              textBody={this.state.textBody}
              handleEditNote={this.handleEditNote}
              handleInputChange={this.handleEditInputChange}
        />
      );
    }

    return(
     
      <div className="note-card">

      <h2>{title}</h2>
      <div className="movie-director">{textBody}</div>

      <button className="delete-edit-btn" onClick={this.toggleEdit}>edit</button>
      <button className="delete-edit-btn" onClick={this.handleDelete}>delete</button>
    
      </div>
    );
  }
}

export default Note;