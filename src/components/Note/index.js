import React, { Component } from 'react'
import axios from 'axios'
import { Link, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

import { DeleteModal } from '../CustomModals'

import './index.css'

const URL = 'https://lambda-notes0706.herokuapp.com/api/users'

class Note extends Component {
  constructor() {
    super()
    this.state = {
      note: null,
      modal: false
    }
  }

  componentDidMount() {
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
        this.setState({ note: res.data })
      })
      .catch(err => {
        alert(`Error: ${err}`)
      })
  }

    toggle = () => {
      const { modal } = this.state
      this.setState({ modal: !modal })
    }

    removeNote = (userId, noteId) => {
      const TOKEN = localStorage.getItem('jwt')
      const REQUEST_OPTIONS = {
        headers: {
          Authorization: TOKEN
        }
      }

      axios.delete(`${URL}/${userId}/notes/${noteId}`, REQUEST_OPTIONS)
        .then(() => {
          this.props.history.push(`/${userId}`)
        })
        .catch(err => {
          alert(`Error: ${err}`)
        })
    }

    render() {
      const { note, modal } = this.state

      const USER_ID = localStorage.getItem('userId')

      if (!note) return (
        <div className='loading'>
          <h2>Loading note information...</h2>
        </div>)

      const {
        title,
        text
      } = note

      const NOTE_ID = this.props.match.params.noteId

      return (
        <div className='content-sect padding'>
          <div className='noteButtons'>
            <Link
              className='editLink'
              to={`/${USER_ID}/notes/${NOTE_ID}/editnote`}>
              <h3>edit</h3>
            </Link>
            <h3 onClick={this.toggle}>delete</h3>
          </div>
          <h2>{title}</h2>
          <p>{text}</p>
          <DeleteModal
            USER_ID={USER_ID}
            NOTE_ID={NOTE_ID}
            modal={modal}
            toggle={this.toggle}
            removeNote={this.removeNote}
          />
        </div>
      )
    }
}

Note.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      noteId: PropTypes.string.isRequired
    })
  }),
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  })
}

export default withRouter(Note)