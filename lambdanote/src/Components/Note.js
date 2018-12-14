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
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">
            <a href="#" class="card-header-icon" aria-label="more options">
            {this.props.NoteTitle}
            </a>
          </p>
        </header>

      <div className="card-content">
        <div className="content">
          {this.props.NoteContent}
          <br />
          <time datetime="2016-1-1">{this.props.NoteTimeStamp}</time>
        </div>
      </div>

      <footer className="card-footer">
        <a href="#" className="card-footer-item">Edit</a>
        <a href="#" className="card-footer-item">Delete</a>
      </footer>


    <div className="modal">
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">{this.props.NoteTitle}</p>
          <button className="delete" aria-label="close"></button>
        </header>
        <section className="modal-card-body">
          {this.props.NoteContent}
        </section>
        <footer className="modal-card-foot">
        <button className="button is-success">Save changes</button>
        <button className="button">Cancel</button>
        </footer>
      </div>
      </div>
    </div>
  )
  }
}
