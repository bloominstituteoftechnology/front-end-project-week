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

const customStyles = {
  content: {
    top: ' 50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
  },
};

//Modal.setAppElement('#root');
const DivButtons = styled.div`
  //border: 1px solid blue;
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
  //border: 1px solid black;
  margin-left: 23%;
  text-align: left;
  width: 80%;

  h2 {
    margin-top: 10px;
    margin-bottom: 20px;
  }
`;

// is there a better way to do this? should this be a class component?
const Note = props => {
  //console.log('note', props);
  // if no notes in state, push back to /notes
  if (props.notes.length === 0) props.history.push('/notes');
  const note = props.notes.find(n => n._id === props.match.params.id);
  //console.log('note note', note);
  //props.selectNote(note._id);
  //if (!props.note) {
  //return <h3>loading...</h3>;
  //}
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
        <h2>{note.title}</h2>
        <p>{note.textBody}</p>
        {/*<button
          //onClick={() => {
            //props.startEditMode();
            //props.history.push(`/edit/${note._id}`);
          //}}>
          //Edit Note
          //</button> 
        <button
          onClick={() => {
            props.deleteNote(note._id);
            props.history.push('/notes');
          }}>
          Delete Note
        </button>*/}
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
