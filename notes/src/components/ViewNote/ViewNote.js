import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Modal from '../Modal/Modal';
import { NoteView, NoteTitle, NoteLinkContainer, NoteLink, NoteTextContainer, NoteContent, NoteLinkText } from './styles';

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
      return <NoteTitle>Loading your note...</NoteTitle>;
    }

    const { title, textBody } = this.state.note;
    return (
      <NoteView>
        <Modal
          showModal={this.state.showModal.toString()}
          deleteNote={this.deleteNote}
          displayModal={this.displayModal}
        />
        <NoteLinkContainer>
          <NoteLink
            to={{
              pathname: `/note/${this.state.note._id}/edit`,
              state: this.state.note,
            }}
          >
            <NoteLinkText>edit</NoteLinkText>
          </NoteLink>
          <NoteLinkText onClick={this.displayModal}>delete</NoteLinkText>
        </NoteLinkContainer>
        <NoteTextContainer>
          <NoteTitle>{title}</NoteTitle>
          <NoteContent source={textBody} />
        </NoteTextContainer>
      </NoteView>
    );
  }
}
