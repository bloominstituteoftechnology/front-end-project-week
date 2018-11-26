import React, { Component } from 'react'

class CreateNoteForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      textBody: ""
    }
  }

  handleChange = e => {
    e.preventDefault()
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    let note = {
      title: this.state.title,
      textBody: this.state.textBody
    }
    this.props.addNote(note)
    this.setState({
      title: "",
      textBody: ""
    })

    setTimeout(() => this.props.history.push("/"), 1000)
  }

  render() {
    return (
      <div className="note-form-wrapper">
        <h2>Create New Note:</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            placeholder="Note Title"
            name="title"
            type="text"
            value={this.state.title}
          />
          <textarea
            onChange={this.handleChange}
            placeholder="Note Content"
            name="textBody"
            value={this.state.textBody}
          />
          <button type="submit">Save</button>
        </form>
      </div>
    )
  }
}

export default CreateNoteForm
