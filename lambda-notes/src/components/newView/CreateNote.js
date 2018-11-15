import React, { Component } from 'react'

export default class CreateNote extends Component {
  state = {
    title: '',
    textBody: ''
  }

  changeHandler = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitHandler = e => {
    e.preventDefault();
    this.props.createNote(this.state)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <h1>Create New Note</h1>
          <input type='text' name='title' value={this.state.title} onChange={this.changeHandler} />
          <textarea cols='40' rows='50' name='textBody' value={this.state.textBody} onChange={this.changeHandler} ></textarea>
          <button type='submit'>Submit Note</button>
        </form>
      </div>
    )
  }
}
