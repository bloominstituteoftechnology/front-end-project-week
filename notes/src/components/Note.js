import React from 'react';
import {connect} from 'react-redux';
import {selectNote, startEditMode, deleteNote} from '../store/actions';
import styled from 'styled-components';

const SingleNote = styled.div`
  width: 50%;
  margin-left: 16.5%;
  border: 1px solid black;
`;

// is there a better way to do this? should this be a class component?
const Note = props => {
  console.log('note', props);
  // if no notes in state, push back to /notes
  if (props.notes.length === 0) props.history.push('/notes');
  const note = props.notes.find(n => n._id === props.match.params.id);
  console.log('note note', note);
  props.selectNote(note._id);
  //if (!props.note) {
  //return <h3>loading...</h3>;
  //}
  if (!note) {
    props.history.push('/notes');
  }
  return (
    <SingleNote>
      <h2>{note.title}</h2>
      <h3>{note.textBody}</h3>
      <button
        onClick={() => {
          props.startEditMode();
          props.history.push(`/edit/${note._id}`);
        }}>
        Edit Note
      </button>
      <button
        onClick={() => {
          props.deleteNote(note._id);
          props.history.push('/notes');
        }}>
        Delete Note
      </button>
    </SingleNote>
  );
};

const mapStateToProps = state => ({
  notes: state.notes,
});

export default connect(
  mapStateToProps,
  {selectNote, startEditMode, deleteNote},
)(Note);
