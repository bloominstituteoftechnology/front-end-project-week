import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import 'bulma/css/bulma.css'
import './Note.css'

export default class Note extends Component {
/*Consider moving this to NoteList 
  toggleModal {

  }
*/
  render() {
    return(
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">
            <a href="#" class="card-header-icon" aria-label="more options">
            props.NoteTitle
            </a>
          </p>
        </header>

      <div class="card-content">
        <div class="content">
          Props.NoteContent
          <br />
          <time datetime="2016-1-1">Props.NoteTimeStamp</time>
        </div>
      </div>

      <footer class="card-footer">
        <a href="#" class="card-footer-item">Edit</a>
        <a href="#" class="card-footer-item">Delete</a>
      </footer>


    <div class="modal">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Modal title</p>
          <button class="delete" aria-label="close"></button>
        </header>
        <section class="modal-card-body">
          props.NoteContent
        </section>
        <footer class="modal-card-foot">
        <button class="button is-success">Save changes</button>
        <button class="button">Cancel</button>
        </footer>
      </div>
      </div>
    </div>
  )
  }
}
