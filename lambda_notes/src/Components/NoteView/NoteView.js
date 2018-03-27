import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NoteView.css';

class NoteView extends Component {
  render() {
    return (
      <div className="noteDiv">
        <div className="noteViewNav">
          <Link
            to={{
              pathhame: `/notes/${
                this.props.location.state.currentNote.id
              }/editNote`
            }}
            className="editLink"
          >
            edit
          </Link>
          <div className="deleteLink">delete</div>
        </div>
        <h3 className="noteTitleView">
          {this.props.location.state.currentNote.title}
        </h3>
        <p className="noteContentView">
          {this.props.location.state.currentNote.text}
        </p>
      </div>
    );
  }
}

export default NoteView;
