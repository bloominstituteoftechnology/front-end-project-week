import React, { Component } from 'react'

export default class NoteForm extends Component {
    constructor(props) {
      super(props)
      this.state = {
        title: '',
        textBody: ''
      }
    }

    handleInputChange = e => {
      this.setState({ [e.target.name]: e.target.value })
    }

    addNote = event => {
      event.preventDefault()
      const newNote = {
        title: this.state.title,
        textBody: this.state.textBody,
    }

    this.props.postNote(newNote)

    this.setState({
      title: '',
      textBody: ''
    })

    }

    render() {
      return(
        <div className="NoteForm">
        <form onSubmit={this.addNote}>
          <div className="field">
            <label className="label">Note Title</label>
            <div className="control">
              <input className="input" type="text" name="title" value={this.state.title} onChange={this.handleInputChange}/>
            </div>
          </div>


          <div className="field">
            <label className="label">Note Content</label>
            <div className="control">
              <input className="input" type="text" name="textBody" value={this.state.textBody} onChange={this.handleInputChange}/>
            </div>
          </div>


          <div className="field is-grouped">
            <div className="control">
              <button className="button is-link" type="submit" onClick={this.addNote}>Add Note</button>
            </div>
          </div>
          </form>
      </div>
      )
    }
}