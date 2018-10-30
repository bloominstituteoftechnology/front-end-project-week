import React, { Component } from 'react'
import styling from "../Styles/styling.css"

export default class Note extends Component {

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
      </div>
      </div>
    </div>
  )
  }
}