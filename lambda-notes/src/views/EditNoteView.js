import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { editNote } from '../actions';
import { withRouter } from 'react-router-dom';

const EditNoteViewContainer = styled.div`
  text-align: left;
  background: #f3f3f3;
  width: 75%;
`;

const EditNoteTitleContainer = styled.div`
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
    font-size: 1.8rem;
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
  background-color: teal;
  color: white;
  width: 30%;
  font-size: 2rem;
  padding: 30px 2.5%;
  margin: 0 2.5%;
  margin-bottom: 30px;
`;

class EditNoteView extends Component {
  state = {
    title: this.props.activeNote.title,
    textBody: this.props.activeNote.textBody
  };

  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  clickHandler = event => {
    event.preventDefault();
    this.props.editNote(this.props.activeNote.id, this.state);
    this.props.history.push('/front-end-project-week');
  };

  render() {
    const { title, textBody } = this.state;

    return (
      <EditNoteViewContainer>
        <EditNoteTitleContainer>
          <h2>Edit Note:</h2>
        </EditNoteTitleContainer>
        <InputContainer>
          <NoteForm onSubmit={this.clickHandler}>
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
        <NoteAppButton onClick={this.clickHandler}>Save</NoteAppButton>
      </EditNoteViewContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    activeNote: state.activeNote,
    editingNote: state.editingNote,
    error: state.error
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    {
      editNote
    }
  )(EditNoteView)
);
