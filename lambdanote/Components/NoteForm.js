import React, { Component } from 'react'
import Moment from 'moment';
import 'bulma/css/bulma.css'
import './Note.css'

export default class NoteForm extends Component {
    constructor(props) {
      super(props)
      this.state = {
        title: '',
        text: '',
        timeStamp: null
      }
    }

    handleInputChange = e => {
      this.setSTate({ [e.target.name]: e.target.value })
    }

    addNote = e => {
      e.preventDefault()
      const newNote = {
        title: this.state.title,
        text: this.state.text,
        timeStamp: Moment().format('MMMM Do YYYY, h:mm:ss a')
      }

      this.props.postNote(newNote)

      this.setState({
        title: '',
        text: '',
        timeStamp: null
      })
    }

    render() {
      return(
        <div class="NoteForm">
          <div class="field">
            <label class="label">Note Title</label>
            <div class="control">
              <input class="input" type="text" placeholder="Note Title" onChange={this.handleInputChange}/>
            </div>
          </div>


          <div class="field">
            <label class="label">Note Content</label>
            <div class="control">
              <textarea class="textarea" placeholder="Note Content" onChange={this.handleInputChange}></textarea>
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
              <button class="button is-link" onClick={this.addNote}>Add Note</button>
            </div>
            <div class="control">
              <button class="button is-text">Cancel</button>
            </div>
          </div>
      </div>
      )
    }
}
