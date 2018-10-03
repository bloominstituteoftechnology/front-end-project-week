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
    const formattedTags = this.state.tags.split(",").map(word => word.trim().toLocaleLowerCase())
    if (this.state.editing) {
      const updatedNote = {
        id: this.props.noteUpdate.id,
        title: this.state.title,
        text: this.state.text,
        tags: formattedTags
      }
      this.props.updateNote(updatedNote)
      this.props.history.push("/")
      this.setState({ editing: false })
    }
    else if (this.state.text.length > 50) {
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
      else if (this.state.text.length < 50) {
        alert("Minimum of 50 characters required for the text area.")
      }
    }

  render() {
    return (
      <Div className="NoteForm">
        <H2>{this.state.editing ? "Edit Note: " : "Create New Note"}</H2>
        <Form onSubmit={(e) => this.handleSubmit(e)}>
        <Input1
            name="title"
            type="text"
            placeholder="Title"
            value={this.state.title}
            onChange={this.handleChange}
            maxLength="15"
            required
          />
          
        </Form>
      </Div>
    )
  }
}

export default withRouter(NoteForm)