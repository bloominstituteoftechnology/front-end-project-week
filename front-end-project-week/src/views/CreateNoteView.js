import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { addNote } from '../store/actions';
import NoteForm from '../components/NoteForm';

/***************************************************************************************************
 ********************************************** Styles *********************************************
 **************************************************************************************************/
const DivPageWrapper = styled.div`
  width: 85%;
  margin-left: 250px;
`;

const H2LoadingMessage = styled.h2`
  margin: 85px 0 0 0;
`;

const H2PageTitle = styled.h2`
  margin: 85px 10px 10px 10px;
`;

/***************************************************************************************************
 ********************************************* Component *******************************************
 **************************************************************************************************/
class CreateNoteView extends Component {
  render() {
    return (
      <DivPageWrapper>
        {this.props.fetchingNotes ? (
          <H2LoadingMessage>Loading Notes...</H2LoadingMessage>
        ) : (
          <div>
            <H2PageTitle>Create New Note:</H2PageTitle>
            <NoteForm {...this.props} create />
          </div>
        )}
      </DivPageWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    addingNote: state.addingNote,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { addNote }
)(CreateNoteView);
