import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteNote } from '../Redux/actions';
import './SingleNote.css';

class SingleNote extends Component {
  state = {
    note: {},
  }

  componentDidMount() {
    const id = Number(this.props.match.params.id);
    const thisNote = this.props.notes.filter(each => each.id === id)[0];
    this.setState({ note: thisNote });
  }

  deleteNote = () => {
    this.props.deleteNote(this.state.note);
  }

  render() {
    return (
      <div className="single-note_body">
        <div className="edit-delete_links">
          <div className="links">
            <div className="each-link">edit</div>
            <Link to="/" className="each-link" onClick={this.deleteNote}>
              <div>delete</div>
            </Link>
          </div>
        </div>
        <div className="single-note_header">{this.state.note.title}</div>
        <div className="single-note_text">{this.state.note.body}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
  };
};

export default connect(mapStateToProps, { deleteNote })(SingleNote);
