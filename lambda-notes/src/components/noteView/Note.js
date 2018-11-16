import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class Note extends Component {

  state = {
    movie:''
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
        this.setState({movie: response.data})
      })
      .catch(err => console.log(err))
  }

  deleteNote = () => {
    axios
      .delete(`https://fe-notes.herokuapp.com/note/delete/${this.state.movie._id}`)
      .then( response => {
        this.props.getNotes()
      })
      .catch( err => console.log(err))
  }

  render() {
    return (
      <div>
        <h3>Edit</h3>
       <Link to={'/'}><h3 onClick={this.deleteNote}>Delete</h3></Link>
        <h1>{this.state.movie.title}</h1>
        <p>{this.state.movie.textBody}</p>
      </div>
    )
  }
}