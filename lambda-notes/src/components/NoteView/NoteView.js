// React and Router
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';

// Components
import DeleteNote from '../DeleteNote';
import { get_note } from '../../actions';

// Styling
import './NoteView.css';

class NoteView extends Component {
  componentDidMount() {
    this.props.get_note(this.props.match.params.id);
  }
  render() {
    return (
      <div className="note-view p-4">
        <div className="note-actions">
          <Link to={`/notes/edit/${this.props.match.params.id}`}>edit</Link>
          <DeleteNote
            id={this.props.match.params.id}
            className="note-delete"
            buttonLabel="Delete Note"
          />
        </div>
        <h2 className="my-4">{this.props.note.title}</h2>
        <p className="pt-2">{this.props.note.content}</p>
      </div>
    );
  }
} // end of NoteView

const mapStateToProps = state => {
  return {
    note: state.note,
  };
};

export default connect(mapStateToProps, { get_note })(NoteView);
