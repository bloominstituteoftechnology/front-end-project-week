import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import EditModal from './EditModal';

export default class ViewNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: null,
      title: '',
      textBody: '',
      show: false,
    };
  }

  componentDidMount() {
    const note = this.props.notes.find(
      note => `${note._id}` === this.props.match.params.id
    );
    this.setState(note);
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.title === '' ||
      this.props.match.params.id !== prevProps.match.params.id
    ) {
      const note = this.props.notes.find(
        note => `${note._id}` === this.props.match.params.id
      );
      this.setState(note);
    }
  }

  deleteNote = () => {
    this.props.deleteNote(this.state._id);
    this.props.history.push('/');
  };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div className="view-note">
        <div className="view-note-actions">
          <Link to={`/edit/${this.state._id}`}>edit</Link>
          <span onClick={this.showModal}>delete</span>
        </div>
        <h2>{this.state.title}</h2>
        <p>{this.state.textBody}</p>
        {this.state.show ? (
          <EditModal deleteNote={this.deleteNote} hideModal={this.hideModal} />
        ) : null}
      </div>
    );
  }
}
