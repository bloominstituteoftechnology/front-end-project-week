import React, { Component } from 'react'
import {
  Container,
  Title,
  Form,
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

    this.props.history.push('/')
  }

  render() {
    const { title, text } = this.state
    const { handleInputChange, handleSubmit } = this

    return (
      <Container>
        <Title>Create New Note:</Title>
        <Form onSubmit={handleSubmit}>
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
          <SaveButton type="submit">Save</SaveButton>
        </Form>
      </Container>
    )
  }
}

export default Add
