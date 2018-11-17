import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class CreateNote extends Component {
  state = {
    title: '',
    textBody: ''
  }

  changeHandler = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitHandler = () => {
    this.props.createNote(this.state)
  }

  render() {
    return (
      <div>
        <form>
          <h1>Create New Note</h1>
          <input type='text' name='title' value={this.state.title} onChange={this.changeHandler} />
          <textarea cols='40' rows='50' name='textBody' value={this.state.textBody} onChange={this.changeHandler} ></textarea>
          <Link to={'/'}><div onClick={this.submitHandler}>Submit Note</div></Link>
        </form>
      </div>
    )
  }
}
