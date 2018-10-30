import React, { Component } from 'react'
import { Link } from 'react-router-dom'


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
        </div>
      </div>

      <footer className="card-footer">
      <Link to="/editform">
        <h4 className="card-footer-item">Edit</h4>
        </Link>
        <h4 className="card-footer-item">Delete</h4>
      </footer>

    </div>
  )
  }
}