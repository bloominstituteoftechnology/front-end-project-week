import React, { Component } from 'react'
import {
  Container,
  Title,
  InputTitle,
  InputBody,
  SaveButton
} from '../styles/Add'

class Edit extends Component {
  state = {
    title: this.props.title,
    text: this.props.textBody
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.putNote({ ...this.state, id: this.props._id })

    this.setState({
      title: '',
      text: ''
    })
  }

  render() {
    const { title, text } = this.state
    const { handleInputChange, handleSubmit } = this

    console.log(this.props)

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
          <SaveButton type="submit">Update</SaveButton>
        </form>
      </Container>
    )
  }
}

export default Edit
