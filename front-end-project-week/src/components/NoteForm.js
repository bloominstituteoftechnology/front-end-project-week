import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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
const NoteForm = props => {
  return (
    <DivNoteFormWrapper>
      <div>
        {props.addingNote ? (
          <H2LoadingMessage>Loading Notes...</H2LoadingMessage>
        ) : (
          <FormNote>
            <InputTitle
              onChange={props.handleInputChange}
              placeholder='Note Title'
              value={props.note.title}
              name='title'
              autoComplete='off'
            />
            <TextareaContent
              onChange={props.handleInputChange}
              placeholder='Note Content'
              value={props.note.textBody}
              name='textBody'
              autoComplete='off'
            />
            <ButtonSubmit type='submit' onClick={e => props.submitHandler(e)}>
              {props.submitButtonText}
            </ButtonSubmit>
          </FormNote>
        )}
      </div>
    </DivNoteFormWrapper>
  );
};

NoteForm.propTypes = {
  handleInputChange: PropTypes.func,
  submitHandler: PropTypes.func,
  submitButtonText: PropTypes.string,
  note: PropTypes.object
};

export default NoteForm;
