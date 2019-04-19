import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { Card, CardBody, CardTitle, CardText } from 'reactstrap'

import './index.css'

const URL = 'https://lambda-notes0706.herokuapp.com/api/users'

class Notes extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      notes: []
    }
  }

  componentWillMount() {
    const token = localStorage.getItem('jwt')
    const REQUEST_OPTIONS = {
      headers: {
        Authorization: token
      }
    }

    const USER_ID = localStorage.getItem('userId')

    axios.get(`${URL}/${USER_ID}/notes`, REQUEST_OPTIONS)
      .then(res => {
        this.setState({
          username: res.data.username,
          notes: res.data.notes
        })
      })
      .catch(err => {
        alert(`Error: ${err}`)
      })
  }

  componentWillReceiveProps() {
    const TOKEN = localStorage.getItem('jwt')

    const REQUEST_OPTIONS = {
      headers: {
        Authorization: TOKEN
      }
    }

    const USER_ID = localStorage.getItem('userId')

    axios.get(`${URL}/${USER_ID}/notes`, REQUEST_OPTIONS)
      .then(res => {
        this.setState({
          username: res.data.username,
          notes: res.data.notes
        })
      })
      .catch(err => {
        alert(`Error: ${err}`)
      })
  }

  render() {
    const {
      username,
      notes
    } = this.state

    const USER_ID = localStorage.getItem('userId')

    if (!username) return (
      <div className='loading'>
        <h4>Loading notes information...</h4>
      </div>)

    return (
      <div className='notesContainer'>
        <h4>{username} Notes:</h4>
        {notes.length === 0
          ? <h5 className='empty'>
          You currently do not have any notes. Click on the create note button to create one.
          </h5>
          : null}
        <div className='notes'>
          {notes.length > 0 ?
            notes.map(note => {
              return (
                <Link
                  key={note._id}
                  className='link'
                  to={`/${USER_ID}/notes/${note._id}`}>
                  <Card>
                    <CardBody>
                      <CardTitle>{note.title}</CardTitle>
                      <CardText>{note.text}</CardText>
                    </CardBody>
                  </Card>
                </Link>
              )
            }) : null}
        </div>
      </div>
    )
  }
}

export default withRouter(Notes)