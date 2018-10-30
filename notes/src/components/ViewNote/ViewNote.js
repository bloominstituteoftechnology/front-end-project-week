import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Modal from '../Modal/Modal';

export default class ViewNote extends Component {
  state = {
    note: null,
    showModal: false,
    confirm: false,
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    this.fetchNote(id);
  }

  fetchNote = (id) => {
    axios
      .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
      .then((res) => {
        this.setState(() => ({ note: res.data }));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  deleteNote = () => {
    // const result = window.confirm('Are you sure you want to delete this note?');
    this.displayModal()
      axios
        .delete(
          `https://fe-notes.herokuapp.com/note/delete/${this.state.note._id}`
        )
        .then(() => this.props.history.push('/'))
        .catch((error) => console.error(error));
  };

  displayModal = () => {
    this.setState({ ...this.state, showModal: !this.state.showModal })
  }

  confirmDelete = () => {
    this.setState({ ...this.state, confirm: true });
  };

  render() {
    if (!this.state.note) {
      return <h3>Loading your note...</h3>;
    }

    const { title, textBody } = this.state.note;
    return (
      <div>
        <Modal
          showModal={this.state.showModal.toString()}
          deleteNote={this.deleteNote}
          displayModal={this.displayModal}
        />
        <div>
          <Link
            to={{
              pathname: `/note/${this.state.note._id}/edit`,
              state: this.state.note,
            }}
          >
            <span>edit</span>
          </Link>
          <span onClick={this.displayModal}>delete</span>
        </div>
        <div>
          <h3>{title}</h3>
          <p>{textBody}</p>
        </div>
      </div>
    );
  }
}
