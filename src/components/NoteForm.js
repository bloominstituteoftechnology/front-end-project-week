import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div``

class NoteForm extends Component {
  constructor(props) {
    super(props) 
    this.state = props.note
  }

  promptText = () => this.props.editingNote
    ? 'Edit Note'
    : 'Create New Note'
  
  render() {
    return (
      <Container>
        <h1>{this.promptText()}</h1>
        <input 
          name='title'
          placeholder='Title'
          value = {this.state.content}
          onChange={this.handleChange} />
        <textarea
          name='content'
          placeholder='Note content'
          value = {this.state.content}
          onChange={this.handleChange} />
      </Container>
    )
  }
}

export default NoteForm