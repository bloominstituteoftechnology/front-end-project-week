import React, { Component } from 'react'
import axios from 'axios'

export default class Edit extends Component {
  state = {
    title: '',
    textBody: ''
  }

  componentDidMount() {
    const id = this.props.match.params.id
    this.fetchNote(id)
  }

  fetchNote = id => {
    axios
      .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
      .then( response => {
        console.log(response.data)
        this.setState({title: response.data.title, textBody: response.data.textBody})
      })
      .catch(err => console.log(err))
  }


  changeHandler = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitHandler = e => {
    const id = this.props.match.params.id
    e.preventDefault();
    console.log(id)
    axios
      .put(`https://fe-notes.herokuapp.com/note/edit/${id}`, this.state)
      .then( response => {
        console.log(response)
      })
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
