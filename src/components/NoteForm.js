import React, { Component } from 'react'
import { ActionButton } from '.'
import styled from 'styled-components'

const Container = styled.div`
  display: flex
  flex-direction: column
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
          name='content'
          placeholder='Note content'
          value = {this.state.content}
          onChange={this.handleChange} />
        <ActionButton 
          onClick={this.handleSubmit}
          text={this.buttonText()} />
      </Container>
    )
  }
}

export default NoteForm