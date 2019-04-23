import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import { Link, withRouter } from 'react-router-dom'
import { Modal, ModalBody, ModalFooter, Button } from 'reactstrap'

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
      const { note } = this.state

      const USER_ID = localStorage.getItem('userId')

      if (!note) return (
        <div className='loading'>
          <h4>Loading note information...</h4>
        </div>)

      const {
        title,
        text
      } = this.state.note

      const NOTE_ID = this.props.match.params.noteId

      return (
        <div className='note'>
          <div className='noteButtons'>
            <Link
              className='editLink'
              to={`/${USER_ID}/notes/${NOTE_ID}/editnote`}>
              <span>edit</span></Link>
            <span onClick={this.toggle}>delete</span>
          </div>
          <h4>{title}</h4>
          <p>{text}</p>
          <Modal
            className='popup'
            isOpen={this.state.modal}
            toggle={this.toggle}>
            <ModalBody className='popupBody'>
            Are you sure you want to delete this?
            </ModalBody>
            <ModalFooter className='popupFooter'>
              <Link
                className='deleteLink'
                to={`/${USER_ID}`}>
                <Button
                  className='deleteButton'
                  color='danger'
                  onClick={() => this.removeNote(USER_ID, NOTE_ID)}>
                  Delete
                </Button>
              </Link>
              <Button
                className='cancelButton'
                color='info'
                onClick={this.toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
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