import React from 'react';
import {connect} from 'react-redux';
import {selectNote, startEditMode, deleteNote} from '../store/actions';
import styled from 'styled-components';

// is there a better way to do this? should this be a class component?
const Note = props => {
  console.log('note', props);
  props.selectNote(props.match.params.id);
  if (!props.note) {
    return <h3>loading...</h3>;
  }
  return (
    <div>
      <h2>{props.note.title}</h2>
      <h3>{props.note.textBody}</h3>
      <button
        onClick={() => {
          props.startEditMode();
          props.history.push(`/edit/${props.note.id}`);
        }}>
        Edit Note
      </button>
      <button
        onClick={() => {
          props.deleteNote(props.note.id);
          props.history.push('/notes');
        }}>
        Delete Note
      </button>
    </div>
  );
};

const mapStateToProps = state => ({
  note: state.selectedNote,
});

export default connect(
  mapStateToProps,
  {selectNote, startEditMode, deleteNote},
)(Note);
