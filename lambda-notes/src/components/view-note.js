import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteNote } from '../REDUX/actions';

class ViewNote extends Component {
  render() {
    const { note } = this.props.location.state.viewNote;
    return (
      <div className="PrimaryContainer__newNote">
        <div className="ViewNote__editOptions">
          <Link to="#">edit</Link>
          <Link to="/" onClick={() => this.props.deleteNote(note.id)}>delete</Link>
        </div>
        <h1 className="PrimaryContainer__header">{note.title}</h1>
        <div>{note.content}</div>
        <div>{note.id}</div>
      </div>
    )
  }
}

export default connect(null, { deleteNote })(ViewNote);

// export default ViewNote;