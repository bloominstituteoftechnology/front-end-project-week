import axios from 'axios'
import React, { Component } from 'react'

class EditNote extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      textBody: ""
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleEdit = e => {
    e.preventDefault()
    let note = this.state
    axios
      .put(
        `https://fe-notes.herokuapp.com/note/edit/${
          this.props.match.params.id
        }`,
        note
      )
      .then(res => {
        this.setState({
          title: "",
          textBody: ""
        })
      })
      .catch(err => console.log(err))
    setTimeout(() => this.props.history.push("/"), 1000)
  }

  render() {
    return (
      <div className="edit-note">
        <h2>Edit Note:</h2>
        <form onSubmit={this.handleEdit}>
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

export default EditNote
