import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleModal } from '../actions';
import '../styles/Note.css';

const Note = props => {
  // this is the note object with the id that matches the url
  const note = props.notes.filter(
    note => String(note.id) === props.match.params.id
  )[0];

  return (
    <div className="note__container">
      <div className="note__options">
        <Link to={`/edit/${note.id}`}>
          <div className="note__option-item">edit</div>
        </Link>
        <div className="note__option-item" onClick={props.toggleModal}>delete</div>
      </div>
      <div className="note">
        <div className="note__title">{note.title}</div>
        <div className="note__content">{note.content}</div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    notes: state.notes,
  };
};

export default connect(mapStateToProps, { toggleModal })(Note);
