import React, { Component } from 'react'
import decode from 'jwt-decode'
import {
  Form,
  Input,
  TextArea,
  Button } from 'semantic-ui-react'
import axios from 'axios'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

const {
  REACT_APP_DEV,
  REACT_APP_PROD } = process.env

const URL = REACT_APP_DEV || REACT_APP_PROD

class CreateNote extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      titleError: null,
      text: '',
      textError: null
    }
  }

  change = (event) => {
    const {
      name,
      value } = event.target

    if (name === 'title') {
      this.setState({
        [name]: value,
        titleError: null
      })
    } else {
      this.setState({
        [name]: value,
        textError: null
      })
    }
  }

  submit = (event) => {
    event.preventDefault()

    const TOKEN = localStorage.getItem('token')
    const USER_ID = decode(TOKEN).id

    const REQUEST_OPTIONS = {
      headers: {
        Authorization: TOKEN
      }
    }

    const {
      title,
      text } = this.state

    axios.post(`${URL}/api/users/${USER_ID}/notes`,
      {
        title,
        text
      }, REQUEST_OPTIONS)
      .then(res => {
        const { id } = res.data
        this.props.history.push({
          pathname: '/note',
          state: { id }
        })
      })
      .catch(err => {
        const {
          status,
          data } = err.response
        if (status === 400) this.setState({ ...data })
        else alert(`Error: ${data.msg1}`)
      })
  }

  render() {
    const {
      title,
      titleError,
      text,
      textError } = this.state

    const {
      change,
      submit } = this

    return (
      <div className='content-sect padding'>
        <h2>Create New Note:</h2>
        <Form
          className='create-note'
          onSubmit={submit}>
          <Input
            id='title'
            className={titleError
              ? 'error'
              : null}
            name='title'
            type='text'
            placeholder='Note Title'
            value={title}
            onChange={change} />
          {titleError
            ? <div className='error-message titleError'>{titleError}</div>
            : null}
          <TextArea
            id='text'
            className={textError
              ? 'error'
              : null}
            name='text'
            placeholder='Note Content'
            cols='50'
            rows='15'
            value={text}
            onChange={change} />
          {textError
            ? <div className='error-message textError'>{textError}</div>
            : null}
          <Button
            id='save'
            className='pacific-blue'>
            Save
          </Button>
        </Form>
      </div>
    )
  }
}

CreateNote.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  })
}

export default withRouter(CreateNote)