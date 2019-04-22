import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

import './index.css'

const URL = 'https://lambda-notes0706.herokuapp.com/api/users'

class CreateNote extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      titleError: null,
      text: '',
      textError: null,
      notes: [],
    }
  }

  submitHandler = (event) => {
    event.preventDefault()
    const TOKEN = localStorage.getItem('jwt')
    const REQUEST_OPTIONS = {
      headers: {
        Authorization: TOKEN
      }
    }

    const USER_ID = localStorage.getItem('userId')

    const { title, text } = this.state

    axios.post(`${URL}/${USER_ID}/notes`, { title, text }, REQUEST_OPTIONS)
      .then(res => {
        this.setState({ notes: res.data.notes })
      })
      .catch(err => {
        if (err.response.status) {
          if (err.response.status === 400 && err.response.data[0] === 'title') {
            this.setState({ titleError: err.response.data[1] })
          } else if (err.response.status === 400 && err.response.data[0] === 'text') {
            this.setState({ textError: err.response.data[1] })
          } else {
            alert(`Error: ${err.response.status} ${err.response.data[1]}`)
          }
        } else {
          alert(`Error: ${err}`)
        }
      })
  }

  OnChange = (event) => {
    const {
      name,
      value
    } = event.target
    if (name === 'title') {
      this.setState({
        [name]: value,
        titleError: null
      })
    } else if (name === 'text') {
      this.setState({
        [name]: value,
        textError: null
      })
    } else {
      this.setState({ [name]: value })
    }
  }

  render() {
    const {
      title,
      titleError,
      text,
      textError,
      notes
    } = this.state

    const USER_ID = localStorage.getItem('userId')

    return (
      <div className='createNote'>
        <h4>Create New Note:</h4>
        <form onSubmit={this.submitHandler}>
          <input
            name='title'
            type='text'
            placeholder='Note Title'
            style={titleError
              ? { borderBottom: '1.5px solid red' }
              : { borderBottom: '1.5px solid #979797' }}
            value={title}
            onChange={this.OnChange} />
          {titleError
            ? <div className='titleError'>{titleError}</div>
            : null}
          <textarea
            name='text'
            placeholder='Note Content'
            cols='50'
            rows='15'
            style={textError
              ? { borderBottom: '1.5px solid red' }
              : { borderBottom: '1.5px solid #979797' }}
            value={text}
            onChange={this.OnChange} />
          {textError
            ? <div className='textError'>{textError}</div>
            : null}
          <input
            className='submit'
            type='submit'
            value='Save' />
        </form>
        {notes.length > 0
          ? <Redirect to={`/${USER_ID}/notes/${notes[notes.length - 1]._id}`} />
          : null}
      </div>
    )
  }
}

export default CreateNote