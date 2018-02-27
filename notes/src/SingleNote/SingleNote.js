import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './SingleNote.css';

class SingleNote extends Component {
  render() {
    const id = Number(this.props.match.params.id);
    const note = this.props.notes.filter(each => each.id === id)[0];
    return (
      <div className="single-note_body">
        <div className="edit-delete_links">
          <div className="links">
            <div className='each-link'>edit</div>
            <div className='each-link'>delete</div>
          </div>
        </div>
        <div className="single-note_header">{note.title}</div>
        <div className="single-note_text">{note.body}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
  };
};

export default connect(mapStateToProps, null)(SingleNote);
