import React from 'react';
import {connect} from 'react-redux';
import {
  selectNote,
  startEditMode,
  showModal,
  deleteNote,
} from '../store/actions';
import styled from 'styled-components';
import Modal from './Modal';

const DivButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 5%;
  padding-top: 10px;

  p {
    padding: 0 10px;
    text-decoration: underline;
  }
`;

const SingleNote = styled.div`
  margin-left: 23%;
  text-align: left;
  width: 70%;
  padding: 10px;

  p {
    white-space: pre-wrap;
  }
  h2 {
    margin-top: 10px;
    margin-bottom: 20px;
  }
`;

// is there a better way to do this? should this be a class component?
const Note = props => {
  // if no notes in state, push back to /notes
  if (props.notes.length === 0) props.history.push('/notes');
  const note = props.notes.find(n => n._id === props.match.params.id);
  if (!note) {
    props.history.push('/notes');
    return null;
  }
  return (
    <>
      <DivButtons>
        <p
          onClick={() => {
            props.startEditMode();
            props.history.push(`/edit/${note._id}`);
          }}>
          edit
        </p>
        <p onClick={() => props.showModal()}>delete</p>
      </DivButtons>
      {props.showingModal && <Modal {...props} id={note._id} />}
      <SingleNote>
        <h2>{note.title}</h2> <p>{note.textBody}</p>
      </SingleNote>
    </>
  );
};

const mapStateToProps = state => ({
  notes: state.notes,
  showingModal: state.showingModal,
});

export default connect(
  mapStateToProps,
  {selectNote, startEditMode, deleteNote, showModal},
)(Note);
