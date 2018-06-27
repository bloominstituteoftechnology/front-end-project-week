import React from 'react'
import { withRouter } from 'react-router-dom'
import './CreateNew.css'

class CreateNew extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      content: ''
    }
  }

  newTitle = event => {
    this.setState({ title: event.target.value })
  }

  newContent = event => {
    this.setState({ content: event.target.value })
  }

  submitNote (event) {
    event.preventDefault()
    const newNote = {
      title: this.state.title,
      content: this.state.content
    }
    console.log('newNote', newNote)
    if (newNote.title !== '' && newNote.content !== '') {
      // eslint-disable-line
      this.props.createNote(newNote)
      this.props.history.push('/')
      console.log('I am in if')
    } else {
      this.props.history.push('/')
      console.log('I am in else')
    }
  }

  render () {
    return (
      <div className='newContainer'>
        <form className='newForm' onSubmit={this.submitNote.bind(this)}>
          <div className='labelName'>
            {' '}<h3>Create New Note:</h3>
          </div>
          <label />
          <input
            className='inputText'
            onChange={this.newTitle}
            type='text'
            name='Note'
            id='noteId'
            placeholder='Note Title'
          />
          <textarea
            className='textarea'
            onChange={this.newContent}
            type='textarea'
            name='text'
            id='Text'
            placeholder='Note Content'
          />

          <button className='formButton' type='submit'>
            Save
          </button>
        </form>
      </div>
    )
  }
}
export default withRouter(CreateNew)
