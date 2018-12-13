import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
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
  constructor(props) {
    super(props);
    this.state = {
      newNote: {
        title: '',
        textBody: ''
      },
      submitButtonText: 'Save'
    };
  }
  //========================== Methods =========================
  clearNewNoteState = () => {
    this.setState({
      newNote: {
        title: '',
        textBody: ''
      }
    });
  };

  //---------------- Form Methods --------------
  handleInputChange = e => {
    this.setState({
      newNote: { ...this.state.newNote, [e.target.name]: e.target.value }
    });
  };

  submitHandler = e => {
    e.preventDefault();
    if (this.state.newNote.title && this.state.newNote.textBody) {
      this.props.addNote(this.state.newNote);
      this.clearNewNoteState();
    }
  };

  render() {
    return (
      <DivPageWrapper>
        {this.props.addingNote ? (
          <H2LoadingMessage>Loading Notes...</H2LoadingMessage>
        ) : (
          <div>
            <H2PageTitle>Create New Note:</H2PageTitle>
            <NoteForm
              addingNote={this.props.addingNote}
              handleInputChange={this.handleInputChange}
              submitHandler={this.submitHandler}
              submitButtonText={this.state.submitButtonText}
              note={this.state.newNote}
            />
          </div>
        )}
      </DivPageWrapper>
    );
  }
}

CreateNoteView.propTypes = {
  addNote: PropTypes.func,
  addingNote: PropTypes.bool
};

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
