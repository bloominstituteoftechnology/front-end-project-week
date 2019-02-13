import axios from 'axios'
import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'

class Note extends Component {
  constructor(props) {
    super(props)
    this.state = {
      note: []
    }
  }

  componentDidMount() {
    this.getIndividualNote(this.props.match.params.id)
  }

  getIndividualNote(id) {
    axios
      .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
      .then(res => {
        this.setState({
          note: res.data
        })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="note-container">
        <div className="note-container-links">
          <Link to={`/notes/edit/${this.state.note._id}`}>
            <span>edit</span>
          </Link>
          <Link to={`/notes/${this.state.note._id}/delete`}>
            <span>delete</span>
          </Link>
        </div>
        <div className="single-note">
          <h2>{this.state.note.title}</h2>
          <p>{this.state.note.textBody}</p>
        </div>
      </div>
    )
  }
}

export default Note
