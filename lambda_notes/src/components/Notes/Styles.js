import styled from 'styled-components';
import { customLayout, customButton } from '../../mixins';

// NotesList component
export const NotesContainer = styled.div`
  max-height: 100%;
`;

export const SubHeading = styled.h2`
  margin-top: 25px;
  margin-left: 2%;
  font-weight: bold;
  font-size: 2.5rem;
  color: #4B4B4A;
`;

export const NotesWrapper = styled.section`
  ${customLayout()}
  width: 100%;
  max-height: 100%;
  margin: 30px 0;
  flex-wrap: wrap;
`;

export const NoteCard = styled.div`
  width: 29%;
  height: 280px;
  margin: 0 2%;
  margin-bottom: 30px;
  border: 1px solid #B7B5B7;
  padding: 20px;
  background-color: #FFF;
`;

export const TitleHeading = styled.h3`
  font-size: 2rem;
  font-weight: bold;
  word-break: break-word;
`;

export const Hr = styled.hr`
  border: 1px solid #B7B5B7;
`;

export const TextBody = styled.p`
  height: 200px;
  font-size: 1.4rem;
  line-height: 25px;
  color: #4B4B4A;
  word-break: break-all;
  overflow-y: hidden;
`;

// SingleNote component
export const SingleNoteContainer = styled.div`
  ${customLayout()}
  width: 100%;
  flex-wrap: wrap;

  h2, p {
    width: 98%;
    color: #4B4B4A;
  }

  h2 {
    margin: 20px 0;
    font-weight: bold;
    font-size: 2.5rem;
  }

  p {
    font-size: 1.6rem;
    line-height: 25px;
    word-break: break-all;
  }
`;

export const SingleNoteActions = styled.div`
  ${customLayout('flex-end')}
  width: 98%;

  button {
    margin-left: 1%;
    border: none;
    text-decoration: underline;
    background-color: transparent;
    color: #4B4B4A;
    font-weight: bold;
    font-size: 1.6rem;
    cursor: pointer;
  }
`;

// Create/Edit Form
export const FormContainer = styled.div`
  h2 {
    margin-bottom: 20px;
    font-weight: bold;
    font-size: 2.5rem;
    color: #4B4B4A;
  }
`;

export const FormGroup = styled.form`
  ${customLayout()}
  flex-wrap: wrap;

  input, textarea {
    margin-bottom: 20px;
    border: 1px solid #B7B5B7;
    border-radius: 3px;
    font-size: 1.6rem;
    padding: 15px 10px;
  }

  input {
    width: 50%;
    height: 35px;
  }

  textarea {
    width: 98%;
    height: 450px;
  }
`;

export const ActionButton = styled.button`
  ${customButton}
  width: 30%;
  color: #FFF;
  font-size: 2rem;
  padding: 15px 0;
`;
