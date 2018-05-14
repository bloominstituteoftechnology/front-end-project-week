import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Container, Badge } from 'reactstrap'
import axios from 'axios'

import './CreateNote.css'
// const serverURL = 'https://lambda-notes-server.herokuapp.com'
const serverURL = 'http://localhost:5000'

class CreateNote extends Component {
  constructor (props) {
    super(props)
    this.state = {
      tags: [],
      tag: ''
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log('in handle submit')
    this.props.createNote(event, this.state.tags)
    this.props.history.push('/')
  }

  handleChange = (event) => {
    this.setState({
      tag: event.target.value
    })
  }

  handleTag = (e) => {
    e.preventDefault()
    const value = this.state.tag

    axios
      .post(
        `${serverURL}/api/tags`,
        { value },
        {
          headers: {
            authorization: localStorage.getItem('authorization')
          }
        }
      )
      .then((res) => {
        this.setState({
          tags: [ value, ...this.state.tags ],
          tag: ''
        })
      })
      .catch((err) => console.log(err))
  }

  render () {
    return (
      <Container fluid className='CreateNote px-0'>
        <form className='form-group mx-3 flex-column create-form'>
          <label className='input-label'>
            <h2 className='label-h2'>Create New Note:</h2>
          </label>
          <input
            className='input-title form-control'
            type='text'
            placeholder='Note Title'
            onChange={this.props.newTitle}
            value={this.props.title}
          />
          <section>
            <label className='label-tag'>Add Tag:</label>
            <input
              className='input-tag'
              type='text'
              placeholder='Note Tag'
              onChange={this.handleChange}
              value={this.state.tag}
            />
            <button
              className='btn-sm btn-success ml-2'
              onClick={this.handleTag}
            >
              Add Tag
            </button>
            {this.state.tags.map((tag, index) => (
              <Badge
                pill
                className='badge-tag ml-2'
                color='primary'
                key={tag + index}
                onClick={() => {
                  this.setState({
                    tags: this.state.tags.filter((curTag) => tag !== curTag)
                  })
                }}
              >
                {tag} x
              </Badge>
            ))}
          </section>
          <textarea
            className='input-body mt-3'
            type='textarea'
            placeholder='Note Content'
            onChange={this.props.newContent}
            value={this.props.content}
          />
          <button className='sav-btn' type='submit' onClick={this.handleSubmit}>
            Save
          </button>
        </form>
      </Container>
    )
  }
}

export default withRouter(CreateNote)
