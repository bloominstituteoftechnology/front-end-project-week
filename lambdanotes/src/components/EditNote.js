import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

export default class EditNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: this.props.match.params.id,
      title:'',
      textBody: '' 
    };
  }

  editNote = (e) => {
    e.preventDefault();
    // console.log(this.props.match.params.id, 'hi')
    // console.log(this.state)
    axios
   .put(`https://killer-notes.herokuapp.com/note/edit/${this.props.match.params.id}`, this.state)
    .then(() => this.props.history.push(`/notes/${this.props.match.params.id}`))
    .catch(err => {
      console.error(err);
    });
  }

  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return(
      <NewNoteDiv>
        <h3>Edit Note:</h3>
        <form onSubmit={this.editNote}>
          <input className='note-title'
            type='text'
            onChange={this.handleInput}
            placeholder='Note Title'
            value={this.state.title}
            name='title'
          />
          <textarea rows='20' className='note-text'
            type='text'
            onChange={this.handleInput}
            placeholder='Note Content'
            value={this.state.textBody}
            name='textBody'
          />
          <button type='submit'>Update</button>
        </form>
      </NewNoteDiv>
    );
  }
}

const NewNoteDiv = styled.div`
  box-sizing: border-box;
  border: 1px solid #BEBEBE;
  background-color: #F3F3F3;
  min-width: 1000px;
  min-height: 1000px;
  padding: 0 30px;

  h3 {
    color: #4A494A;
    margin-top: 50px;
  }

  form {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    
    .note-title {
      border: 1px solid #BEBEBE;
      border-radius: 3px;
      width: 380px;
      height: 40px;
      margin: 15px 0;
      font-size: 16px;
    }

    .note-text {
      border: 1px solid #BEBEBE;
      border-radius: 3px;
      width: 650px;
      font-size: 16px;
      margin: 15px 0;
    }

    button {
      box-sizing: border-box;
      height: 50px;
      width: 220px;
      background-color: #2AC0C4;
      color: #FFFFFF;
      text-decoration: none;
      font-weight: bold;
      margin: 15px 0;
      text-align: center;
      line-height: 50px;
      border: 1px solid #BEBEBE;
      font-size: 16px;
      cursor: pointer;
    }
  }
`