import React, { Component } from 'react'
import { connect } from 'react-redux'

import { createNote } from '../actions/notesActions'

class CreateNote extends Component {
  constructor(props){
    super(props)
    this.state = {
      title: '',
      priority: '',
      textBody: '',
      urlAddress: '',
      tags:'',
    }
  }


  inputHandler = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitHandler = (e) => {
    e.preventDefault()
    this.props.createNote(this.state)
  }

  render(){
    return (
      <form onSubmit={this.submitHandler}>
        <input type="text" name="title" value={this.state.title} onChange={this.inputHandler} placeholder="Title"/>
        <input type="text" name="priority" value={this.state.priority} onChange={this.inputHandler} placeholder="Priority"/>
        <input type="text" name="summary" value={this.state.summary} onChange={this.inputHandler} placeholder="Summary"/>
        <input type="text" name="textBody" value={this.state.textBody} onChange={this.inputHandler} placeholder="Description"/>
        <input type="text" name="urlAddress" value={this.state.img} onChange={this.inputHandler} placeholder="URL"/>
        <button type="submit">SAVE</button>
      </form>
    )
  }
}
const mapStateToProps = state => {
  return {}
}

export default connect(mapStateToProps, { createNote: createNote })(CreateNote);