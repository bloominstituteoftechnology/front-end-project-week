import React, { Component } from 'react'
import {
  Container,
  Title,
  InputTitle,
  InputBody,
  SaveButton
} from '../styles/Add'

class Add extends Component {
  state = {
    title: '',
    text: ''
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.postNote(this.state)

    this.setState({
      title: '',
      text: ''
    })
  }

  render() {
    const { title, text } = this.state
    const { handleInputChange, handleSubmit } = this

    return (
      <Container>
        <form onSubmit={handleSubmit}>
          <Title>Create New Note:</Title>
          <InputTitle
            onChange={handleInputChange}
            placeholder="title"
            value={title}
            name="title"
          />
          <InputBody
            onChange={handleInputChange}
            placeholder="text"
            value={text}
            name="text"
          />
          <SaveButton type="submit">Add</SaveButton>
        </form>
      </Container>
    )
  }
}

export default Add
