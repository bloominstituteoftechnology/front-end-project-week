import React, { Component } from 'react'
import jwtDecode from 'jwt-decode'
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
      loading: false,
      search: ''
    }
  }

  componentWillMount () {
    const token = localStorage.getItem('authorization')
    if (!token) {
      this.props.clearState()
      console.log('clear state should have launched')
      return this.setState({ loggedIn: false })
    }
    const decoded = jwtDecode(token)
    const now = new Date().getTime()
    const expiredToken = now >= decoded.exp
    console.log('decodedJWT: ', decoded)
    console.log('now: ', now, 'exp: ', decoded.exp, 'expired?: ', expiredToken)
    if (expiredToken) {
      this.props.clearState()
      console.log('clear state should have launched')
      this.setState({ loggedIn: false })
    } else {
      this.setState({ loggedIn: true })
    }
  }

  toggle = () => {
    this.setState({
      loggedIn: !this.state.loggedIn
    })
  }

  onSearch = ({ target }) => {
    this.setState({
      search: target.value
    })
  }

  render () {
    const { search } = this.state
    const filteredNotes = this.props.notes.filter((note) => {
      return (
        note.title.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
        note.content.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
        note.tags.join('').toLowerCase().indexOf(search.toLowerCase()) !== -1
      )
    })
    const numOfCols = 4
    const filteredNoteGrid = filteredNotes
      .map((note, index) => {
        return index % numOfCols === 0
          ? filteredNotes.slice(index, index + numOfCols)
          : null
      })
      .filter((x) => x != null)

    return (
      <section className='ListNotes m-0 p-0'>
        {this.props.username ? (
          <input
            type='text'
            className='search-bar'
            placeholder='search'
            name='search'
            value={this.state.search}
            onChange={this.onSearch}
          />
        ) : null}
        <Modal
          className='modal-modal'
          isOpen={!this.state.loggedIn}
          toggle={this.toggle}
          backdrop='static'
        >
          <ModalBody className='modal-body'>
            Please Register/Login to access Lambda Notes
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
        {this.props.username ? (
          <h2 className='list_h2'>
            {this.props.username.charAt(0).toUpperCase() +
              this.props.username.substr(1).toLowerCase()}'s Notes:{' '}
          </h2>
        ) : null}

        <Container fluid className='notes p-0 m-0'>
          {filteredNoteGrid.map((miniNoteArray, index) => {
            return (
              <Row key={index} className='row-notes p-0 m-0 mb-2'>
                {miniNoteArray.map((note) => (
                  <Col className='card col-notes p-0 mx-auto' key={note._id}>
                    <div className='card-body m-0 p-1'>
                      <Link className='card-title' to={`/view/${note._id}`}>
                        <h4 className='card-title'>
                          {note.title.length >= 13 ? (
                            note.title.substr(0, 13) + ' ...'
                          ) : (
                            note.title
                          )}
                        </h4>
                      </Link>
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
      </section>
    )
  }
}
export default withRouter(ListNotes)
