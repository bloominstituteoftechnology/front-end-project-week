import React, { Component } from 'react'
import decode from 'jwt-decode'
import axios from 'axios'
import {
  Link,
  withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

import { DeleteModal } from '../CustomModals'

import './index.css'

const {
  REACT_APP_DEV,
  REACT_APP_PROD } = process.env

const URL = REACT_APP_DEV || REACT_APP_PROD

class Note extends Component {
  constructor() {
    super()
    this.state = {
      userId: null,
      id: null,
      title: null,
      text: null,
      modal: false
    }
  }

  componentDidMount() {
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
      .then(res => this.setState({
        userId: USER_ID,
        ...res.data
      }))
      .catch(err => {
        const {
          status,
          data } = err.response

        if (status !== 500) alert(`Error: ${data}`)
        else alert(`Error: ${data.msg1}`)
      })
  }

  toggle = () => {
    const { modal } = this.state
    this.setState({ modal: !modal })
  }

  removeNote = () => {
    const TOKEN = localStorage.getItem('token')

    const {
      userId: USER_ID,
      id: NOTE_ID } = this.state

    const REQUEST_OPTIONS = {
      headers: {
        Authorization: TOKEN
      }
    }

    axios.delete(`${URL}/api/users/${USER_ID}/note/${NOTE_ID}`, REQUEST_OPTIONS)
      .then(() => this.props.history.push('/'))
      .catch(err => {
        const {
          status,
          data } = err.response

        if (status !== 500) alert(`Error: ${data}`)
        else alert(`Error: ${data.msg1}`)
      })
  }

  render() {
    const {
      id,
      title,
      text,
      modal } = this.state

    const {
      toggle,
      removeNote } = this

    if (!id) return (
      <div className='loading'>
        <h2>Loading note information...</h2>
      </div>)

    return (
      <div className='content-sect padding'>
        <div className='noteButtons'>
          <Link
            className='editLink'
            to={{
              pathname: '/editnote',
              state: { id }
            }}>
            <h3>edit</h3>
          </Link>
          <h3 onClick={toggle}>delete</h3>
        </div>
        <h2>{title}</h2>
        <p>{text}</p>
        <DeleteModal
          modal={modal}
          toggle={toggle}
          removeNote={removeNote} />
      </div>
    )
  }
}

Note.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      id: PropTypes.string.isRequired
    })
  }),
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  })
}

export default withRouter(Note)