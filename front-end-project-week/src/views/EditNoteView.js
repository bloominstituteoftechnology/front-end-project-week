import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { getNote, editNote } from '../store/actions';
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
class EditNoteView extends Component {
  componentDidMount() {
    this.props.getNote(this.props.match.params.id);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.editingNote !== this.props.editingNote) {
      if (!this.props.editingNote) {
        this.props.history.push(
          `${this.props.urlLinks.home}${this.props.urlLinks.readNoteClient}/${
            this.props.match.params.id
          }`
        );
      }
    }
  }

  render() {
    return (
      <DivPageWrapper>
        {this.props.fetchingNotes ? (
          <H2LoadingMessage>Getting Note...</H2LoadingMessage>
        ) : (
          <div>
            <H2PageTitle>Edit Note:</H2PageTitle>
            <NoteForm {...this.props} edit />
          </div>
        )}
      </DivPageWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    note: state.note,
    fetchingNote: state.fetchingNote,
    editingNote: state.editingNote,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { getNote, editNote }
)(EditNoteView);
