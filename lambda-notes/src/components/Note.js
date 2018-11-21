import React, { Component } from 'react';
import '../Styles/styling.css';

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
        </div>
      </div>
    </div>
  )
  }
}