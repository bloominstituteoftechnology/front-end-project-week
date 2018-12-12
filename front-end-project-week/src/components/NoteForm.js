import React, { Component } from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';

/***************************************************************************************************
 ********************************************** Styles *********************************************
 **************************************************************************************************/
const DivNoteFormWrapper = styled.div``;

const H2LoadingMessage = styled.h2`
  margin: 85px 0 0 0;
`;

const FormNote = styled.form`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

const InputTitle = styled.input`
  padding: 10px;
  font-size: 20px;
  border-radius: 5px;
  margin-bottom: 20px;
  width: 25%;
`;

const TextareaContent = styled.textarea`
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 20px;
  width: 70%;
  height: 500px;
`;

const ButtonSubmit = styled.button`
  width: 200px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border: 2px solid rgb(151, 151, 151);
  margin-bottom: 20px;
  color: white;
  background-color: rgb(43, 193, 196);
  font-size: 20px;
  font-weight: bold;
  text-shadow: 1px 1px rgba(0, 0, 0, 0.5);
  box-shadow: -1px 3px 10px 1px rgba(0, 0, 0, 0.2);
  user-select: none;

  &:hover {
    background-color: white;
    color: rgb(43, 193, 196);
    cursor: pointer;
  }
`;

/***************************************************************************************************
 ********************************************* Component *******************************************
 **************************************************************************************************/
class NoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newNote: {
        title: props.edit ? props.note.title : '',
        textBody: props.edit ? props.note.textBody : ''
      },
      redirect: false
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
    if (this.props.create) {
      if (this.state.newNote.title && this.state.newNote.textBody) {
        this.props.addNote(this.state.newNote);
        this.clearNewNoteState();
      }
    } else if (this.props.edit) {
      if (this.state.newNote.title && this.state.newNote.textBody) {
        this.props.editNote(this.props.note._id, this.state.newNote);
      }
    }
  };

  //========================== Render ==========================
  render() {
    return (
      <DivNoteFormWrapper>
        <div>
          {this.props.addingNote ? (
            <H2LoadingMessage>Loading Notes...</H2LoadingMessage>
          ) : (
            <FormNote>
              <InputTitle
                onChange={this.handleInputChange}
                placeholder='Note Title'
                value={this.state.newNote.title}
                name='title'
                autoComplete='off'
              />
              <TextareaContent
                onChange={this.handleInputChange}
                placeholder='Note Content'
                value={this.state.newNote.textBody}
                name='textBody'
                autoComplete='off'
              />
              <ButtonSubmit type='submit' onClick={e => this.submitHandler(e)}>
                {this.props.create && 'Save'}
                {this.props.edit && 'Update'}
              </ButtonSubmit>
            </FormNote>
          )}
        </div>
      </DivNoteFormWrapper>
    );
  }
}

// NoteForm.propTypes = {
//   propertyName: PropTypes.string
// }

export default NoteForm;
