import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import './index.css'

const URL = 'https://lambda-notes0706.herokuapp.com/api/users'

class Notes extends Component {
  constructor() {
    super()
    this.state = {
      username: null,
      notes: null
    }
  }

  componentDidMount() {
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

  render() {
    const {
      username,
      notes
    } = this.state

    const USER_ID = localStorage.getItem('userId')

    if (!username && !notes) return (
      <div className='loading'>
        <h2>Loading notes information...</h2>
      </div>)

    return (
      <div className='content-sect padding'>
        <h2>{username} Notes:</h2>
        {notes.length === 0
          ? <p>You currently do not have any notes. Click on the create note button to create one.</p>
          : null}
        <div className='notes'>
          {notes.length > 0 ?
            notes.map(note => (
              <Card
                className='card-container'
                key={note._id}
                as={Link}
                to={`/${USER_ID}/notes/${note._id}`}>
                <Card.Content
                  className='card-header'
                  header={note.title} />
                <Card.Content
                  className='card-description'
                  description={note.text} />
              </Card>
            )) : null}
        </div>
      </div>
    )
  }
}

export default Notes