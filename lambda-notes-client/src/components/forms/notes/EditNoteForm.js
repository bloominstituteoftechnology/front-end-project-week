import React, { Component } from 'react';
import styled from "react-emotion";
import axios from 'axios';
import { connect } from 'react-redux';

import { updateNotes } from '../../../store/actions'; 



const Main = styled("main")`
  margin-left: 25%;
  width: 75%;
  min-height: 100vh;
  padding: 80px 45px 80px 35px;
  
  form {
    display: flex;
    flex-direction: column;

    h2 {
      font-size: 2.7rem;
      font-weight: bold;
      color: #4A494A;
    }

    .title-input-container {
      input {
        margin-top: 40px;
        padding: 19px;
        width: 59%;
        &::placeholder {
          color: rgba(0,0,0,.7);
          font-size: 1.6rem;
          font-family: sans-serif;
        }
      }
    }
    .desc-input-container {
      textarea {
        margin-top: 19px;
        padding: 27px;
        width: 100%;
        height: 468px;
        resize: none;
        &::placeholder {
          color: rgba(0,0,0,.7);
          font-size: 1.6rem;
          font-family: sans-serif;
        }
      }
    }

    button {
      margin-top: 18px;
      padding: 16px;
      width: 260px;
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      color: white;
      font-size: 2rem;
      font-weight: bold;
      background-color: #2AC0C4;
      border: solid 1px #939797;
      &:hover {
        cursor: pointer;
        background-color: #23a0a4;
      }
    }
  }
`;


class EditNoteForm extends Component {
  state = {
    title: '',
    content: ''
  }

  handleOnChange = e => this.setState({[e.target.name]: e.target.value});

  handleEditNote = (e) => {
    e.preventDefault();
    const token = localStorage.getItem('jwt')

    const {id} = this.props.match.params;

    let content = {
      title: this.state.title,
      content: this.state.content
    }

    const reqOptions = {
      headers: {
        Authorization: token,
      }
    }

    axios.put(`http://localhost:8000/protected/notes/${id}`, content, reqOptions)
    .then(res => {
      axios.get('http://localhost:8000/protected/notes', reqOptions)
      .then(res => {
        this.props.updateNotesHandler(res.data)
        this.props.history.push('/notes')
      })
      .catch(err => {
        console.log(err)
      })
    })
    .catch(err => console.log(err))
    this.setState({title: '', content: ''})
  }

  render() {
    return (
      <Main>
        <form action="submit" onSubmit={this.handleEditNote}>
          <h2>Edit Note:</h2>
          <div className="title-input-container">
            <input
              type="text"
              placeholder="Note Title"
              name="title"
              value={this.state.title}
              onChange={this.handleOnChange}
              required
            />
          </div>
          <div className="desc-input-container">
            <textarea
              type="text"
              placeholder="Note Content"
              name="content"
              value={this.state.content}
              onChange={this.handleOnChange}
            />
          </div>
          <button type="submit">Update</button>
        </form>
      </Main>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateNotesHandler: lePackage => {
    dispatch(updateNotes(lePackage));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(EditNoteForm);

