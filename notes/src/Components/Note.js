import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Modal from './Modal';


class Note extends Component {
  state = {
    note: {},
    toggleModal: false,
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    axios.get(`http://localhost:5005/note/${id}`)
      .then(response => this.setState({ note: response.data, id}))
      .catch(error => console.log(error));
  }
  handleToggle = () => {
    this.setState({toggleModal: !this.state.toggleModal})
  }
  handleDelete = note => {
    axios.delete(`http://localhost:5005/note/${this.state.id}`)
    .then(() => window.location = '/')
    .catch(error => console.log(error));
  }
  render() {
    const { note, toggleModal, id } = this.state;
    note.id = id;
    const props = {
      toggle: this.handleToggle,
      delete: this.handleDelete,
    }
    return (
      <div className="notes-container">
        {toggleModal ? <Modal {...props}/> : null}
        <Link to={{pathname: '/edit', state: note }}>
          Edit
        </Link>
        <div onClick={this.handleToggle}>
          Delete
        </div>
        <div className="flex-container">
          <h2>{note.title}</h2>
          <p>{note.content}</p>
        </div>
      </div>
    );
  }
}

export default Note;