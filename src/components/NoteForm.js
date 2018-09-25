import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'

class NoteForm extends Component {
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
        tags: this.props.noteUpdate.tags
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
      const formattedTags = this.state.tags.split(",").map(word => word.trim())
      const newNote = {
        id: Date.now(),
        title: this.state.title,
        text: this.state.text,
        tags: formattedTags,
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
      <Div className="NoteForm">
        <H2>Create New Note</H2>
        <Form onSubmit={(e) => this.handleSubmit(e)}>
          <Input1
            name="title"
            type="text"
            placeholder="Title"
            value={this.state.title}
            onChange={this.handleChange}
            required
          />
          <Textarea
            name="text"
            type="text"
            placeholder="Text"
            value={this.state.text}
            onChange={this.handleChange}
            required
          />
          <Input2
            name="tags"
            type="text"
            placeholder="Tags (with commas)"
            value={this.state.tags}
            onChange={this.handleChange}
            required
          />
          <Button1>Submit</Button1>
        </Form>
      </Div>
    )
  }
}

const Div = styled.div`
  padding: 5% 3% 1% 3%;
  width: 75%;
  background: #F2F1F2;
  `
const H2 = styled.h2``
const Form = styled.form``
const Input1 = styled.input`
  width: 60%;
  font-size: 1.6rem;
  padding: 2%;
  margin: 2% 0;
  border-radius: 2px;
`
const Input2 = styled.input`
  width: 100%;
  font-size: 1.6rem;
  padding: 2%;
  margin: 2% 0;
  border-radius: 2px;
`
const Textarea = styled.textarea`
  width: 100%;
  font-size: 1.6rem;
  padding: 2%;
  margin: 2% 0;
  height: 300px;
border-radius: 2px;
`
const Button1 = styled.button`
  padding: 2%;
  width: 50%;
`

export default withRouter(NoteForm)
