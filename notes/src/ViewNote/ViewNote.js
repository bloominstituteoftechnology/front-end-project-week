import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteNote, editNote } from '../Redux/actions';
import './ViewNote.css';

class SingleNote extends Component {
  state = {
    note: {},
    title: '',
    body: '',
    deleteButtonPressed: false,
    editButtonPressed: false,
  };

  componentDidMount() {
    const id = Number(this.props.match.params.id);
    const thisNote = this.props.notes.filter(each => each.id === id)[0];
    this.setState({ note: thisNote });
  }



  render() {
    return (
      <div>
        {this.state.editButtonPressed ? (
          this.editNoteFields()
        ) : (
          <div className="container">
            <div className="single-note_body">
              <div className="edit-delete_links">
                <div className="links">
                  <div className="each-link" onClick={this.toggleEdit}>
                    edit
                  </div>
                  <div className="each-link" onClick={this.toggleDelete}>
                    delete
                  </div>
                </div>
              </div>
              <div className="single-note_header">{this.state.note.title}</div>
              <div className="single-note_text">{this.state.note.body}</div>
            </div>
            {this.state.deleteButtonPressed && this.delete()}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
  };
};

export default connect(mapStateToProps, { deleteNote, editNote })(SingleNote);
