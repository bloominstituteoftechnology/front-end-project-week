import React, { Component } from 'react'
import { Form, Input, TextArea, Button } from 'semantic-ui-react'
import axios from 'axios'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

const URL = 'https://lambda-notes0706.herokuapp.com/api/users'

class EditNote extends Component {
  constructor() {
    super()
    this.state = {
      title: null,
      titleError: null,
      text: null,
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

    onChange = (event) => {
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

      if (title === null && text === null) return (
        <div className='loading'>
          <h4>Loading note information...</h4>
        </div>)

      return (
        <div className='content padding'>
          <h2>Edit Note: </h2>
          <Form
            className='edit-note'
            onSubmit={this.submitHandler}>
            <Input
              id='title'
              className={titleError
                ? 'error'
                : null}
              name='title'
              type='text'
              placeholder='Note Title'
              value={title}
              onChange={this.onChange} />
            {titleError
              ? <div className='error-message'>{titleError}</div>
              : null}
            <TextArea
              id='text'
              className={titleError
                ? 'error'
                : null}
              name='text'
              cols='50'
              rows='15'
              placeholder='Note Content'
              value={text}
              onChange={this.onChange} />
            {textError
              ? <div className='error-message'>{textError}</div>
              : null}
            <Button
              id='update'
              className='pacific-blue'>
              Update
            </Button>
          </Form>
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