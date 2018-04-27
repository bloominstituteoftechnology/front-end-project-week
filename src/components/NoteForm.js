import React, { Component } from 'react'
import { ActionButton } from '.'
import styled from 'styled-components'

const Container = styled.div`
  display: flex
  flex-direction: column
  input, textarea {
    padding: 15px
    border-radius: 5px
    border: 1px solid #AEAEAE
    font-size: 1.1rem
    margin-bottom: 15px
    resize: none
  }
`

const Control = styled.div`
  align-self: flex-end
`

class NoteForm extends Component {
  constructor(props) {
    super(props) 
    console.log(props.note)
    this.state = props.note
  }

  promptText = () => this.props.editingNote
    ? 'Edit Note'
    : 'Create New Note'

  buttonText = () => this.props.editingNote
    ? 'Update'
    : 'Create Note'

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value})
  handleSubmit = () => this.props.handleSubmit(this.state)
  
  render() {
    console.log(this.state)
    return (
      <Container>
        <h1>{this.promptText()}</h1>
        <input 
          name='title'
          placeholder='Title'
          value = {this.state.title}
          onChange={this.handleChange} />
        <textarea
          rows='20'
          name='content'
          placeholder='Note content'
          value = {this.state.content}
          onChange={this.handleChange} />
        <Control>
          <ActionButton 
            onClick={this.handleSubmit}
            text={this.buttonText()} />
        </Control>
      </Container>
    )
  }
}

export default NoteForm