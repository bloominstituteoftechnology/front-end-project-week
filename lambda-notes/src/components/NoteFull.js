import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { getNote, deleteNote } from '../actions/actions';
import Modal from 'react-modal';

class NoteFull extends Component {
  state = {
    redirect: false,
    modalIsOpen: false,
  };
  componentDidMount() {
    this.props.getNote(this.props.match.params.id);
  }
  deleteNote = () => {
    this.props.deleteNote(this.props.match.params.id);
    this.setState({
      redirect: true,
    });
  };
  render() {
    return (
      <div>
        {this.props.currentNote.map(note => {
          return (
            <div key={note.id} className="full-note">
              <p className="text-right">
                <Link to={`/edit/${note.id}`}>edit</Link>
                <Link onClick={this.deleteNote} to={`/`}>
                delete
                </Link>
              </p>
              <h3>{note.title}</h3>
              <p className="note-body">{note.body}</p>
            </div>
          );
        })}
        {this.state.redirect && <Redirect to={'/'} />}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    error: state.error,
    currentNote: state.currentNote,
  };
};

export default connect(mapStateToProps, { getNote, deleteNote })(NoteFull);
