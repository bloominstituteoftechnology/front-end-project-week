import React, { Component } from 'react'
import Button from './Button'
import Flex from './Flex'

export default class extends Component { 

  state = {
    title: this.props.title,
    content: this.props.content
  }

  handleChange = e => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }
  
  render() {

    const { id, editNote, history } = this.props
    const { title, content } = this.state

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
      <label htmlFor="content">
        <h3>Text</h3>
        <textarea 
          onChange={this.handleChange}
          id="content" 
          rows="20" 
          cols="100" 
          name="content"
          value={content}
        />
      </label>
      <Flex mt={2}>
        <Button 
          onClick={() => {
            editNote(id, this.state)
            history.push(`/note/${id}`)
          }}
          variant='primary'
          width={150}
          mx={2}
        >
          edit Note
        </Button>
        <Button
          onClick={() => 
            history.push(`/note/${id}`)
          }
          variant='primary'
          width={150}
          mx={2}
        >
          cancel
        </Button>
      </Flex>
    </div>
  }
}
