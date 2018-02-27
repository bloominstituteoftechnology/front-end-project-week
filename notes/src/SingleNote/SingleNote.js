import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteNote } from '../Redux/actions';
import LeftBar from '../LeftBar/LeftBar';
import './SingleNote.css';

class SingleNote extends Component {
  state = {
    note: {},
    buttonPressed: false,
  };

  componentDidMount() {
    const id = Number(this.props.match.params.id);
    const thisNote = this.props.notes.filter(each => each.id === id)[0];
    this.setState({ note: thisNote });
  }

  deleteNote = () => {
    this.props.deleteNote(this.state.note);
  };

  toggleButton = () => {
    this.setState({ buttonPressed: !this.state.buttonPressed });
  };

  modal = () => {
    return (
      <div className="modal-layer-one">
        <div className="modal-layer-two">
          <div className="the-modal">
            <div className="modal-text">
              Are you sure you want to delete this?
            </div>
            <Link to="/" className="each-link" onClick={this.deleteNote}>
              <button className="modal-danger">Delete</button>
            </Link>

            <button className="modal-safe" onClick={this.toggleButton}>
              No
            </button>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className="container">
        <LeftBar />
        <div className="single-note_body">
          <div className="edit-delete_links">
            <div className="links">
              <div className="each-link">edit</div>
              <div className="each-link" onClick={this.toggleButton}>delete</div>
            </div>
          </div>
          <div className="single-note_header">{this.state.note.title}</div>
          <div className="single-note_text">{this.state.note.body}</div>
        </div>
        {this.state.buttonPressed && this.modal()}
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
