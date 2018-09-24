import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchData } from '../actions';

import NoteCard from '../components/Notes/NoteCard';

class NotesView extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <h1> Your Notes:</h1>
        {this.props.notes.map((note) => {
          return <NoteCard note={note} key={note._id} />;
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    notes: state.notesReducer.notes,
    fetchingData: state.notesReducer.fetchingData,
  };
};

export default connect(
  mapStateToProps,
  { fetchData }
)(NotesView);
