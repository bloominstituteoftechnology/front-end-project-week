
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

  
  render() {
    return (
      <Div className="NoteForm">
        <H2>{this.state.editing ? "Edit Note: " : "Create New Note"}</H2>
        <Form onSubmit={(e) => this.handleSubmit(e)}>
          
        </Form>
      </Div>
    )
  }
}

export default withRouter(NoteForm)