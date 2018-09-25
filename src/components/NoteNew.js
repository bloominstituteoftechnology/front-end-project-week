import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'

class NoteNew extends Component {
  state = {
    title: "",
    text: "",
    tags: "",
    editing: false
  }

  componentDidMount() {
    if (this.props.noteUpdate) {
      this.setState({
        editing: true,
        title: this.props.noteUpdate.title,
        text: this.props.noteUpdate.text,
        tags: this.props.noteUpdate.tags,
      })
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.state.editing) {
      const updatedNote = {
        id: this.props.noteUpdate.id,
        title: this.state.title,
        text: this.state.text,
        tags: this.state.tags
      }
      this.props.updateNote(updatedNote)
      this.props.history.push("/")
    }
    else {
      const newNote = {
        id: Date.now(),
        title: this.state.title,
        text: this.state.text,
        tags: this.state.tags,
      }
      const emptyNote = {
        title: '',
        text: '',
        tags: ''
      }
      this.props.addNote(newNote)
      this.setState(emptyNote)
      this.props.history.push("/")
    }
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
          <Input
            name="tags"
            type="text"
            placeholder="Tags"
            value={this.state.tags}
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