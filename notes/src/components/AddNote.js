import React from 'react';
import { connect } from 'react-redux';
import { addNote } from '../actions';
// import { v1 } from 'uuid';
import styled from 'styled-components';

const AddNoteWrapper = styled.div`
  h2 {
    padding: 2.8rem 0 1.4rem;
    font-size:1.4rem;
    font-weight: bold;
    color:#303030;
  }
`;

const AddNoteForm = styled.form`
  display: flex;
  flex-direction: column;

  input, textarea {
    border-radius: 4px;
    border: 1px solid gray;
    margin-bottom: 1.4rem;
    padding: 0 1rem;
  }

  input {
    height: 40px;
    width: 60%;
  }

  textarea {
    height: 200px;
    resize: vertical;
    padding-top: 1rem;
  }

  button {
    background: #30B8BC;
    color: #FFFFFF;
    font-weight: bold;
    width: 150px;
    text-align: center;
    padding: 0.7rem;
    font-size: 1rem;
    border: 1px solid gray;
  }
`;

class AddNote extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      content: '',
    }
  }

  handleChange = e => {
    e.preventDefault();
    console.log(e.target.name, e.target.value)
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  addNewNote = e => {
    e.preventDefault();
    let newNote = {
      title: this.state.title,
      content: this.state.content,
      // id: v1() // note: id is getting set by server code so this is not necessary
    }
    this.props.dispatch(addNote(newNote))
    this.setState({
      title: '',
      content: '',
    });
  }

  render() {
    return (
      <AddNoteWrapper>
        <h2>Create New Note:</h2>
        <AddNoteForm onSubmit={this.addNewNote}>
          <input type='text' value={this.state.title} name='title' onChange={this.handleChange} placeholder='Note Title' required/>
          <textarea type='text' value={this.state.content} name='content' onChange={this.handleChange} placeholder='Note content' required/>
          <button type='submit'>Save</button>
        </AddNoteForm>
    </AddNoteWrapper>
  )
  }
};

export default connect()(AddNote);