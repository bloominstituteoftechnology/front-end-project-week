import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Modal, ModalBody, ModalFooter, Button } from 'reactstrap'

import './ListNotes.css'

class ListNotes extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: false,
      search: ''
    }
  }

  componentWillMount() {
    if (localStorage.getItem('authorization')) this.setState({ loggedIn: true })
  }

  toggle = () => {
    this.setState({
      loggedIn: !this.state.loggedIn
    })
  }

  onSearch = event => {
    this.setState({
      search: event.target.value
    })
  }

  render(props) {
    const { search } = this.state
    const filteredNotes = this.props.notes.filter(note => {
      return (
        note.title.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
        note.content.toLowerCase().indexOf(search.toLowerCase()) !== -1
      )
    })

    return (
      <div className="ListNotes">
        {localStorage.getItem('authorization')
          ? <section className="RegLog">
              <h6 className="loginName">
                Account: {this.props.username}
              </h6>
            </section>
          : <div />}
        <input
          type="text"
          className="search-bar"
          placeholder="search"
          value={this.state.search}
          onChange={this.onSearch}
        />

        <Modal
          className="modal-modal"
          isOpen={!this.state.loggedIn}
          toggle={this.toggle}
          backdrop="static"
        >
          <ModalBody className="modal-body">
            Please Register/Login to access Lambda Notes.
          </ModalBody>
          <ModalFooter>
            <Button
              color="success"
              className="register-button"
              onClick={() => this.props.history.push('/register')}
            >
              Register
            </Button>
            <Button
              color="primary"
              onClick={() => this.props.history.push('/login')}
              className="login-button"
            >
              Login
            </Button>
          </ModalFooter>
        </Modal>

        <h2 className="list_h2">Your Notes:</h2>
        <div className="notes">
          {filteredNotes.map(note =>
            <div className="card-body" key={note._id}>
              <Link className="card-link" to={`/view/${note._id}`}>
                <h4 className="card-title">
                  {note.title.length >= 16
                    ? note.title.substr(0, 16) + ' ...'
                    : note.title}
                </h4>
              </Link>
              <span className="card-text">
                {note.content.length >= 300
                  ? note.content.substr(0, 290) + ' ...'
                  : note.content}
              </span>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default withRouter(ListNotes)
