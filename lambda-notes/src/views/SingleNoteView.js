// React import
import React, { Component } from 'react';
// Action imports
import { fetchSingleNote, deleteNote } from '../actions';
// Redux imports
import { connect } from 'react-redux';
// Component imports
import SingleNote from '../components/SingleNote';
// CSS import
import './SingleNoteView.css';
// Loader import
import Loader from 'react-loader-spinner';

class SingleNoteView extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchSingleNote(id);
  }

  render() {
    if (this.props.loading) {
      return (
        <div className="loader">
          <Loader
            type="Triangle"
            color="#00BFFF"
            height="100"
            width="100"
            className="triangleLoader"
          />
        </div>
      );
    }
    return (
      <div className="singleNoteView">
        {this.props.notes.map(note => {
          return (
            <SingleNote
              note={note}
              key={note._id}
              deleteNote={this.props.deleteNote}
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = ({ notes, loading }) => {
  return {
    notes,
    loading
  };
};

export default connect(
  mapStateToProps,
  { fetchSingleNote, deleteNote }
)(SingleNoteView);
