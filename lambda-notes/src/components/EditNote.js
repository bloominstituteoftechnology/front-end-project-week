import React, { Component } from 'react'
import Button from './Button'

export default class extends Component { 

  state = {
    title: this.props.title,
    textBody: this.props.text
  }

  handleChange = e => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }
  
  render() {

    const { id, editNote, history } = this.props
    const { title, textBody } = this.state

    return <div>
      <h2>Edit Note</h2>
      <hr />
      <label htmlFor="title">
        <h3>Title</h3>
        <input 
          onChange={this.handleChange}
          id="title" 
          type="text" 
          name="title" 
          value={title} 
        />
      </label>  
      <label htmlFor="textBody">
        <h3>Text</h3>
        <textarea 
          onChange={this.handleChange}
          id="textBody" 
          rows="20" 
          cols="100" 
          name="textBody"
          value={textBody}
        />
      </label>
      <Button 
        onClick={() => {
          editNote(id, this.state)
          history.push(`/note/${id}`)
        }}
        variant='primary'
        width={220}
        mt={3}
      >
        Edit Note
      </Button>
    </div>
  }
}
