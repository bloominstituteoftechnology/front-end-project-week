import React, { Component } from 'react'

class CreateNoteForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      textBody: "",
      tags: ""
    }
  }

  handleChange = () => {}

  handleSubmit = () => {}

  render() {
    return (
      <form>
        <input type="text" />
      </form>
    )
  }
}

export default CreateNoteForm
