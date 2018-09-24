import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'

class NoteNew extends Component {
  state = {
    title: "",
    text: "",
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const newNote = {
      id: Date.now(),
      title: this.state.title,
      text: this.state.text
    }
    const emptyNote = {
      title: '',
      text: ''
    }
    this.props.addNote(newNote)
    this.setState(emptyNote)
    this.props.history.push("/")
  }

  render() {
    return (
      <Div className="NoteNew">
        <H2>NoteNew Class Component</H2>
        <Form onSubmit={(e) => this.handleSubmit(e)}>
          <Input
            name="title"
            type="text"
            placeholder="Title"
            value={this.state.title}
            onChange={this.handleChange}
            required
          />
          <Input
            name="text"
            type="text"
            placeholder="Text"
            value={this.state.text}
            onChange={this.handleChange}
            required
          />
          <Button>Submit</Button>
        </Form>
      </Div>
    )
  }
}

const Div = styled.div``
const H2 = styled.h2``
const Form = styled.form``
const Input = styled.input``
const Button = styled.button``

export default withRouter(NoteNew)