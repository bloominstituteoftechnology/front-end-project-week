import React, { Component } from 'react';
import { addNote } from '../actions';
import { connect } from 'react-redux';
import { Button, Input} from 'reactstrap';
import HomeLeftPanel from './HomeLeftPanel';
import styled from 'styled-components';
import NewNoteForm from './NewNoteForm';

const StyledCreateNewNote = styled.div`
    display: flex;
    width: 100%;
`;

const CreateNewNote = () => {
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
  }
}

export default connect(mapStateToProp, { addNote })(CreateNewNote);