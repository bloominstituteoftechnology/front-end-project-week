import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { addNote } from '../actions';
import { withRouter } from 'react-router-dom';

const NewNoteViewContainer = styled.div`
  text-align: left;
  background: #f3f3f3;
  width: 75%;
`;

const NewNoteTitleContainer = styled.div`
  height: 150px;
  padding-top: 85px;
  font-size: 2rem;
  padding-left: 4%;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  padding: 25px 2.5%;
`;

const NoteForm = styled.form`
  flex-wrap: wrap;

  input,
  textarea {
    margin-bottom: 20px;
    border: 1px solid black;
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

const NoteInputTitle = styled.input`
  /* font-size: 2rem;
  border: 3px solid #555;
  margin-bottom: 30px; */
`;

const NoteInputContent = styled.textarea`
  /* height: 500px; */
`;

const NoteAppButton = styled.button`
  background-color: #2ac0c4;
  color: white;
  width: 30%;
  font-size: 2rem;
  padding: 30px 2.5%;
  margin: 0 2.5%;
  margin-bottom: 30px;
`;

class NewNoteView extends Component {
  state = {
    title: '',
    textBody: '',
    id: ''
  };

  handleInput = event => {
    // console.log(this.user);
    this.setState({ [event.target.name]: event.target.value });
  };

  clickHandler = event => {
    event.preventDefault();

    const id = localStorage.getItem('secret_notes_token');
    console.log('The user ID is...', id);
    this.setState({ id: id });
    this.props.addNote(this.state);
    this.props.history.push('/front-end-project-week');
  };

  render() {
    const { title, textBody } = this.state;
    const id = localStorage.getItem('user_id');
    console.log('FROM RENDER... The user ID is...', id);

    return (
      <NewNoteViewContainer>
        <NewNoteTitleContainer>
          <h2>Create New Note:</h2>
        </NewNoteTitleContainer>
        <InputContainer>
          <NoteForm onSubmit={this.clickHandler}>
            {' '}
            <NoteInputTitle
              type="text"
              placeholder="Note Title"
              name="title"
              value={title}
              onChange={this.handleInput}
            />
            <NoteInputContent
              type="text"
              placeholder="Note Content"
              name="textBody"
              value={textBody}
              onChange={this.handleInput}
            />
          </NoteForm>
        </InputContainer>
        <NoteAppButton onClick={this.clickHandler} type="submit">
          Save
        </NoteAppButton>
      </NewNoteViewContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    addingNote: state.addingNote,
    error: state.error
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    {
      addNote
    }
  )(NewNoteView)
);
