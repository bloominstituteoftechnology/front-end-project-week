import Markdown from 'markdown-to-jsx'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { postNote } from '../actions'
class NewNote extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      context: ''
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    const { title, context } = this.state
    const note = { title, context }
    // let tagCopy = tags.split(',')
    // note.tags = tagCopy
    const token = localStorage.getItem('token')
    this.props.postNote(note, token)
    this.setState({ title: '', context: '' })
    this.props.history.push('/')
  }

  render () {
    return (
      <div className='newNote-container'>
        <Markdown>#Create New Note:</Markdown>
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
          {/* <input
            className='tag-input'
            type='text'
            name='tags'
            placeholder='add #tag'
            value={this.state.tags}
            onChange={this.handleChange}
          /> */}
          <textarea
            className='textBody-input'
            type='text'
            name='context'
            placeholder='Note Content'
            value={this.state.context}
            onChange={this.handleChange}
            required
          />

          <button className='save-Btn'>Save</button>
        </form>
      </div>
    )
  }
}

export default connect(null, { postNote })(NewNote)
