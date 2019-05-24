import React, { Component } from 'react'
import decode from 'jwt-decode'
import { Card } from 'semantic-ui-react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import './index.css'

const {
  REACT_APP_DEV,
  REACT_APP_PROD } = process.env

const URL = REACT_APP_DEV || REACT_APP_PROD

class Notes extends Component {
  constructor() {
    super()
    this.state = {
      id: null,
      firstname: null,
      lastname: null,
      notes: null
    }
  }

  componentDidMount() {
    const TOKEN = localStorage.getItem('token')

    const USER_ID = decode(TOKEN).id

    const REQUEST_OPTIONS = {
      headers: {
        Authorization: TOKEN
      }
    }

    axios
      .get(`${URL}/api/users/${USER_ID}/notes`, REQUEST_OPTIONS)
      .then(res => this.setState({ ...res.data }))
      .catch(err => {
        const { data } = err.response
        alert(`Error: ${data}`)
      })
  }

  render() {
    const {
      id,
      firstname,
      lastname,
      notes } = this.state

    if (!id) return (
      <div className='loading'>
        <h2>Loading notes information...</h2>
      </div>)

    return (
      <div className='content-sect padding'>
        <h2>{firstname} {lastname} Notes:</h2>
        {notes.length === 0
          ? <p>You currently do not have any notes. Click on the create note button to create one.</p>
          : <div className='notes'>
            {notes.map(note => {
              const {
                id,
                title,
                text } = note

              return (
                <Card
                  className='card-container'
                  key={id}
                  as={Link}
                  to={{
                    pathname: '/note',
                    state: { id }
                  }}>
                  <Card.Content
                    className='card-header'
                    header={title} />
                  <Card.Content
                    className='card-description'
                    description={text} />
                </Card>
              )})}
          </div>}
      </div>
    )
  }
}

export default Notes