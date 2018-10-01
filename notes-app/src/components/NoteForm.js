
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'


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