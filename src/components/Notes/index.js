import React, { Component } from 'react'
import decode from 'jwt-decode'
import { Card } from 'semantic-ui-react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import Loading from '../Loading'

import './index.css'

const {
  REACT_APP_DEV,
  REACT_APP_PROD } = process.env

const URL = REACT_APP_DEV || REACT_APP_PROD

class Notes extends Component {
  _isMounted = false

  constructor() {
    super()
    this.state = {
      firstname: '',
      lastname: '',
      loading: false,
      notes: []
    }
  }

  componentDidMount() {
    this._isMounted = true

    this.setState({ loading: true })

    const TOKEN = localStorage.getItem('token')

    const USER_ID = decode(TOKEN).id

    const REQUEST_OPTIONS = {
      headers: {
        Authorization: TOKEN
      }
    }

    axios
      .get(`${URL}/api/users/${USER_ID}/notes`, REQUEST_OPTIONS)
      .then(res => {
        setTimeout(() => {
          if (this._isMounted) {
            this.setState({
              loading: false,
              ...res.data
            })
          }
        }, 3000)
      })
      .catch(err => {
        const { data } = err.response
        alert(`Error: ${data}`)
      })
  }

  componentWillUnmount() {
    this._isMounted = false
  }

  render() {
    const {
      firstname,
      lastname,
      loading,
      notes } = this.state

    if (loading) return <Loading text = 'Loading Notes' />

    return (
      <div className = 'content-sect padding'>
        <h2>{firstname} {lastname} Notes:</h2>
        {notes.length === 0
          ? <p>You currently do not have any notes. Click on the create note button to create one.</p>
          : <div className = 'notes'>
            {notes.map(note => {
              const {
                id,
                title,
                text } = note

              return (
                <Card
                  className = 'card-container'
                  key = {id}
                  as = {Link}
                  to = {{
                    pathname: '/note',
                    state: { id }
                  }}>
                  <Card.Content
                    className = 'card-header'
                    header = {title} />
                  <Card.Content
                    className = 'card-description'
                    description = {text} />
                </Card>
              )})}
          </div>}
      </div>
    )
  }
}

export default Notes