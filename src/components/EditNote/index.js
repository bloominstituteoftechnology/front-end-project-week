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

import Loading from '../Loading'

const {
  REACT_APP_DEV,
  REACT_APP_PROD
} = process.env

const URL = REACT_APP_DEV || REACT_APP_PROD

class EditNote extends Component {
  _isMounted = false

  constructor() {
    super()
    this.state = {
      id: '',
      loading: true,
      text: '',
      textError: '',
      title: '',
      titleError: ''
    }
  }

  componentDidMount() {
    this._isMounted = true

    const TOKEN = localStorage.getItem('token')

    const REQUEST_OPTIONS = {
      headers: {
        Authorization: TOKEN
      }
    }

    const { id: USER_ID } = decode(TOKEN)

    const { state } = this.props.location

    if (!state) return this.props.history.push('/')

    const { id: NOTE_ID } = state

    axios.get(`${URL}/api/users/${USER_ID}/note/${NOTE_ID}`, REQUEST_OPTIONS)
      .then(res => {
        setTimeout(() => {
          if (this._isMounted) {
            this.setState({
              loading: false,
              ...res.data,
              userId: USER_ID
            })
          }
        }, 3000)
      })
      .catch(err => {
        const {
          data,
          status } = err.response

        if (status === 400) this.setState({ ...data })
        else alert(`Error: ${data.msg1}`)
      })
  }

  componentWillUnmount() {
    this._isMounted = false
  }

  change = (event) => {
    const {
      name,
      value } = event.target

    if (name === 'title') this.setState({
      [name]: value,
      titleError: '' })
    else this.setState({
      [name]: value,
      textError: ''
    })
  }

  submit = (event) => {
    event.preventDefault()

    const TOKEN = localStorage.getItem('token')

    const REQUEST_OPTIONS = {
      headers: {
        Authorization: TOKEN
      }
    }

    const {
      id: NOTE_ID,
      userId: USER_ID,
      text,
      title } = this.state

    axios.put(`${URL}/api/users/${USER_ID}/note/${NOTE_ID}`,
      {
        text,
        title
      }, REQUEST_OPTIONS)
      .then(() => this.props.history.push({
        pathname: '/note',
        state: { id: NOTE_ID }
      }))
      .catch(err => {
        const {
          data,
          status } = err.response

        if (status === 400) this.setState({ ...data })
        else alert(`Error: ${data.msg1}`)
      })
  }

  render() {
    const {
      loading,
      text,
      textError,
      title,
      titleError } = this.state

    const {
      change,
      submit } = this

    if (loading) return <Loading text = 'Preparing Note For Editing' />

    return (
      <div className = 'content-sect padding'>
        <h2>Edit Note: </h2>
        <Form
          className = 'edit-note'
          onSubmit = {submit}>
          <Input
            id = 'title'
            className = {titleError
              ? 'error'
              : null}
            name = 'title'
            type = 'text'
            placeholder = 'Note Title'
            value = {title}
            onChange = {change} />
          {titleError
            ? <div className = 'error-message titleError'>{titleError}</div>
            : null}
          <TextArea
            id = 'text'
            className = {titleError
              ? 'error'
              : null}
            name = 'text'
            cols = '50'
            rows = '15'
            placeholder = 'Note Content'
            value = {text}
            onChange = {change} />
          {textError
            ? <div className = 'error-message textError'>{textError}</div>
            : null}
          <Button
            id = 'update'
            className = 'pacific-blue'>
            Update
          </Button>
        </Form>
      </div>
    )
  }
}

EditNote.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      id: PropTypes.string.isRequired
    })
  }),
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  })
}

export default withRouter(EditNote)