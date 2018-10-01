import React, { Component } from 'react'
import 'bulma/css/bulma.css'
import './Note.css'

export default class NoteForm extends Component {
    constructor(props) {
      super(props)
      this.state = {
        title: '',
        text: ''
      }
    }

    handleInputChange = e => {
      this.setSTate({ [e.target.name]: e.target.value })
    }

    addNote = e => {
      e.preventDefault()
      const newNote = {
        title: this.state.title,
        text: this.state.text
      }

      this.props.postNote(newNote)

      this.setState({
        title: '',
        text: ''
      })
    }

    render() {
      return(
        <div class="NoteForm">
          <div class="field">
            <label class="label">Note Title</label>
            <div class="control">
              <input class="input" type="text" placeholder="Note Title" />
            </div>
          </div>


          <div class="field">
            <label class="label">Note Content</label>
            <div class="control">
              <textarea class="textarea" placeholder="Note Content"></textarea>
            </div>
          </div>

          <div class="field">
            <div class="control">
              <label class="checkbox">
              <input type="checkbox"/>
                Set A Reminder?
              </label>
            </div>
          </div>

          <div class="field is-grouped">
            <div class="control">
              <button class="button is-link">Add Note</button>
            </div>
            <div class="control">
              <button class="button is-text">Cancel</button>
            </div>
          </div>
      </div>
      )
    }
}
