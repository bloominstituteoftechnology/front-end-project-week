import React from 'react';
import {connect} from 'react-redux';
import {
  selectNote,
  startEditMode,
  showModal,
  deleteNote,
} from '../store/actions';
import ReactMarkdown from 'react-markdown';
//import styled from 'styled-components';
import Modal from './Modal';
import {DivButtons, SingleNote} from '../styles';

/*
 *const DivButtons = styled.div`
 *  display: flex;
 *  justify-content: flex-end;
 *  padding-right: 5%;
 *  padding-top: 2rem;
 *  width: 100%;
 *
 *  p {
 *    padding: 0 10px;
 *    text-decoration: underline;
 *  }
 *`;
 *
 *const SingleNote = styled.div`
 *  //margin-left: 28%;
 *  margin-left: 300px;
 *  text-align: left;
 *  width: 65%;
 *  padding: 2rem 1rem;
 *
 *  //@media (min-width: 1200px) {
 *  //margin-left: 31%;
 *  //}
 *
 *  p {
 *    white-space: pre-wrap;
 *    line-height: 1.5;
 *  }
 *  h2 {
 *    margin-top: 0.3rem;
 *    margin-bottom: 3rem;
 *    font-size: 2.2rem;
 *  }
 *`;
 *
 */
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
        <h2>{note.title}</h2>
        <div className="md">
          <ReactMarkdown source={note.textBody} />
        </div>
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
