import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Modal, ModalBody, ModalFooter, Button } from 'reactstrap'

import './ListNotes.css'

class ListNotes extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loggedIn: false
    }
  }

  componentWillMount () {
    if (localStorage.getItem('authorization')) this.setState({ loggedIn: true })
  }

  toggle = () => {
    this.setState({
      loggedIn: !this.state.loggedIn
    })
  }

  render (props) {
    return (
      <div className='ListNotes'>
        {localStorage.getItem('authorization')
          ? <section className='RegLog'>
            <h6 className='loginName'>
              {this.props.username}
            </h6>
            <Link
              className='logout-link'
              to={`/`}
              onClick={() => {
                localStorage.clear()
                this.props.clearNotes()
                this.toggle()
              }}
            >
                Logout
            </Link>
          </section>
          : <div />}

        <Modal
          className='modal-modal'
          isOpen={!this.state.loggedIn}
          toggle={this.toggle}
        >
          <ModalBody className='modal-body'>
            Please Register/Login to access Lambda Notes.
          </ModalBody>
          <ModalFooter>
            <Button
              color='success'
              className='register-button'
              onClick={() => this.props.history.push('/register')}
            >
              Register
            </Button>
            <Button
              color='primary'
              onClick={() => this.props.history.push('/login')}
              className='login-button'
            >
              Login
            </Button>
          </ModalFooter>
        </Modal>

        <h2 className='list_h2'>Your Notes:</h2>
        <div className='notes'>
          {this.props.notes.map(note =>
            <div className='card-body' key={note._id}>
              <h4 className='card-title'>
                <Link className='card-link' to={`/view/${note._id}`}>
                  {note.title}
                </Link>
              </h4>
              <span className='card-text'>
                {note.content}
              </span>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default withRouter(ListNotes)
