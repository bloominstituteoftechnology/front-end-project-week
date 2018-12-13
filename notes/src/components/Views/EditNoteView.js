import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getNotes, getNote, editNote } from '../../actions';

import EditNote from '../EditNote';

class EditNoteView extends Component {
  state = {
    title: this.props.note.title,
    textBody: this.props.note.textBody,
    show: false
  }

  componentDidMount() {
    this.props.getNote(this.props.match.params.id);
  }

  showModal = () => {
    this.setState({ show: true });
  }

  hideModal = () => {
    this.setState({ show: false });
  }

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  editNote = (e, id) => {
    e.preventDefault();
    const { title, textBody } = this.state;
    this.props.editNote(id, { title, textBody });
    this.setState({ title: '', textBody: '' });
  }

  getNotes = () => {
    this.props.getNotes();
    this.props.history.push('/');
  }

  render() {
    const note = this.props.note;
    console.log("RENDER note", note);


    return (
      <EditNote
        editNote={this.editNote}
        handleInput={this.handleInput}
        title={this.state.title}
        textBody={this.state.textBody}
        note={note} getNotes={this.getNotes}
        hideModal={this.hideModal}
        showModal={this.showModal}
        show={this.state.show}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    note: state.note,
    gettingNote: state.gettingNote
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    { getNotes, getNote, editNote }
  )(EditNoteView)
);