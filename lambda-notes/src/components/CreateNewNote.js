import React from 'react';
import { addNote } from '../actions';
import { connect } from 'react-redux';
import HomeLeftPanel from './HomeLeftPanel';
import styled from 'styled-components';
import NewNoteForm from './NewNoteForm';

const StyledCreateNewNote = styled.div`
    display: flex;
    width: 100%;
    height: 700px;
    font-family: Roboto;
`;

const CreateNewNote = () => {
    // console.log('this.props.id from App', this.props.id)
    return (
      <StyledCreateNewNote>
        <HomeLeftPanel />
        <NewNoteForm />
      </StyledCreateNewNote>
    );
  }

const mapStateToProp = (state) => {
  return {
    notes: state.notes,
    emptynotes: state.emptynotes
  }
}

export default connect(mapStateToProp, { addNote })(CreateNewNote);