import React, { Component } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

import './index.css'

const URL = 'https://lambda-notes0706.herokuapp.com/api/users'

class EditNote extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      titleError: null,
      text: '',
      textError: null,
    }
  }

  componentWillMount() {
    const TOKEN = localStorage.getItem('jwt')

    const REQUEST_OPTIONS = {
      headers: {
        Authorization: TOKEN
      }
    }

    const USER_ID = localStorage.getItem('userId')

    const NOTE_ID = this.props.match.params.noteId

    axios.get(`${URL}/${USER_ID}/notes/${NOTE_ID}`, REQUEST_OPTIONS)
      .then(res => {
        this.setState({
          title: res.data.title,
          text: res.data.text
        })
      })
      .catch(err => {
        alert(`Error: ${err.response.status} ${err.response.data}`)
      })
  }

    OnChange = (event) => {
      const { name, value } = event.target
      if (name === 'title') {
        this.setState({
          [name]: value,
          titleError: null
        })
      } else if (name === 'text') {
        this.setState({
          [name]: value, textError: null
        })
      } else {
        this.setState({ [name]: value })
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

      const NOTE_ID = this.props.match.params.noteId

      const {
        title,
        text
      } = this.state

      axios.put(`${URL}/${USER_ID}/notes/${NOTE_ID}`, { title, text }, REQUEST_OPTIONS)
        .then(() => {
          this.props.history.push(`/${USER_ID}/notes/${NOTE_ID}`)
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
            alert(`Error: ${err}`) }
        })
    }

    render() {
      const {
        title,
        titleError,
        text,
        textError,
      } = this.state

      return (
        <div className='editNote' >
          <h4>Edit Note: </h4>
          <form onSubmit={this.submitHandler}>
            <input
              name='title'
              type='text'
              style={this.state.titleError
                ? { borderBottom: '1.5px solid red' }
                : { borderBottom: '1.5px solid #979797' }}
              value={title}
              onChange={this.OnChange}
            />
            {titleError
              ? <div className='titleError'>{titleError}</div>
              : null}
            <textarea
              name='text'
              cols='50'
              rows='15'
              style={textError
                ? { borderBottom: '1.5px solid red' }
                : { borderBottom: '1.5px solid #979797' }}
              value={text}
              onChange={this.OnChange}
            />
            {textError
              ? <div className='textError'>{textError}</div>
              : null}
            <input
              className='submit'
              type='submit'
              value='Update' />
          </form>
        </div>
      )
    }
}

EditNote.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      noteId: PropTypes.string.isRequired
    })
  }),
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  })
}

export default withRouter(EditNote)