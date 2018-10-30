import React, { Component } from 'react'
import { Link } from 'react-router-dom'

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
        textBody: this.state.textBody
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
            <div className="control">
              <input className="input" type="text" placeholder="Note Title" name="title" value={this.state.title} onChange={this.handleInputChange}/>
            </div>


          <div className="field">
              <input className="inputBody" type="text" placeholder="Note Content" name="textBody" value={this.state.textBody} onChange={this.handleInputChange}/>
            </div>


            <div className="field is-grouped">
                <Link to="/">
                    <div className="control">
                        <button className="button is-link" type="submit" onClick={this.addNote}>Add Note</button>
                    </div> 
                </Link>
            </div>
          </form>
      </div>
      )
    }
}