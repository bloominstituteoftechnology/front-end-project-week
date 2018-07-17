import React, { Component } from 'react'
import { connect } from 'react-redux'
import { postNote } from '../actions'

class NewNote extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      textBody: ''
    }
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    const { title, textBody } = this.state
    const note = { title, textBody }
    this.props.postNote(note)
    this.setState({ title: '', textBody: '' })
    this.props.history.push('/')
  }

  render () {
    return (
      <div className='newNote-container'>
        <h1 className='newNote-header'>Create New Note:</h1>
        <form
          className='newNote-form'
          type='submit'
          onSubmit={this.handleSubmit}
        >
          <input
            className='title-input'
            type='text'
            name='title'
            placeholder='Add title'
            value={this.state.title}
            onChange={this.handleChange}
            required
          />
          <textarea
            className='textBody-input'
            type='text'
            name='textBody'
            placeholder='Note Content'
            value={this.state.textBody}
            onChange={this.handleChange}
            required
          />
          <button>Add Note</button>
        </form>
      </div>
    )
  }
}

export default connect(null, { postNote })(NewNote)
