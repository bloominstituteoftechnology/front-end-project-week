import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import {
  Modal,
  ModalBody,
  ModalFooter,
  Button,
  Container,
  Row,
  Col,
  Badge
} from 'reactstrap'

import './ListNotes.css'

class ListNotes extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loggedIn: false,
      search: ''
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

  onSearch = (event) => {
    this.setState({
      search: event.target.value
    })
  }

  render (props) {
    const { search } = this.state
    const filteredNotes = this.props.notes.filter((note) => {
      return (
        note.title.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
        note.content.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
        note.tags.join('').toLowerCase().indexOf(search.toLowerCase()) !== -1
      )
    })
    const filteredNoteGrid = filteredNotes
      .map((note, index) => {
        return index % 4 === 0 ? filteredNotes.slice(index, index + 4) : null
      })
      .filter((x) => x != null)

    return (
      <div className='ListNotes mb-0'>
        <input
          type='text'
          className='search-bar'
          placeholder='search'
          value={this.state.search}
          onChange={this.onSearch}
        />

        <Modal
          className='modal-modal'
          isOpen={!this.state.loggedIn}
          toggle={this.toggle}
          backdrop='static'
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

        <h2 className='list_h2 '>
          {this.props.username.charAt(0).toUpperCase() +
            this.props.username.substr(1).toLowerCase()}'s Notes:
        </h2>
        <Container fluid className='notes p-0 m-0'>
          {filteredNoteGrid.map((miniNoteArray, index) => {
            return (
              <Row key={index} className='row-notes p-0 m-0'>
                {miniNoteArray.map((note) => (
                  <Col className='card col-notes p-0 mx-auto' key={note._id}>
                    <div className='card-body'>
                      <h4
                        className='card-title'
                        as={Link}
                        to={`/view/${note._id}`}
                      >
                        {note.title.length >= 13 ? (
                          note.title.substr(0, 13) + ' ...'
                        ) : (
                          note.title
                        )}
                      </h4>
                      <span className='card-text'>
                        {note.content.length >= 175 ? (
                          note.content.substr(0, 175) + ' ...'
                        ) : (
                          note.content
                        )}
                      </span>
                    </div>
                    <div className='card-footer m-0 px-0 py-1'>
                      {note.tags.length < 5 ? (
                        note.tags.map((tag, index) => (
                          <Badge
                            pill
                            color='primary'
                            className='ml-1 badge-tag'
                            key={tag + index}
                            onClick={() => {
                              this.setState({ search: tag })
                            }}
                          >
                            {tag}
                          </Badge>
                        ))
                      ) : (
                        note.tags.reverse().slice(0, 4).map((tag, index) => (
                          <Badge
                            pill
                            color='primary'
                            className='ml-1 badge-tag'
                            key={tag + index}
                          >
                            {tag}
                          </Badge>
                        ))
                      )}
                    </div>
                  </Col>
                ))}
              </Row>
            )
          })}
        </Container>
      </div>
    )
  }
}

export default withRouter(ListNotes)
