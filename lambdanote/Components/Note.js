import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import 'bulma/css/bulma.css'
import './Note.css'

export default class Note extends Component {
  showModal(index) {
    const modal = document.querySelector('.modal');
    modal.classList.value = 'modal is-active';
  }

  closeModal() {
    const modal = document.querySelector('.modal');
    modal.classList.value = 'modal'
  }

  editModal() {
    const modal = document.querySelector('.modal')
    const modalWords = modal.childNodes[1].innerText.split('\n')
  }

  render() {
    return(
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">
            <a href="#" className="card-header-icon" aria-label="more options" onClick={this.showModal}>
            {this.props.NoteTitle}
            </a>
          </p>
        </header>

      <div className="card-content">
        <div className="content">
          {this.props.NoteContent}
          <br />
          <hr />
          <br />
          <time dateTime={this.props.NoteTimeStamp}>{this.props.NoteTimeStamp}</time>
        </div>
      </div>

      <footer className="card-footer">
        <a href="#" className="card-footer-item" onClick={this.showModal}>Edit</a>
        <a href="/" className="card-footer-item" onClick={this.props.NoteDelete}>Delete</a>
      </footer>


    <div className="modal" class="modal">
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">{this.props.NoteTitle}</p>
          <button className="delete" aria-label="close" onClick={this.closeModal}></button>
        </header>
        <section className="modal-card-body">
        <div className="card">
          <header className="card-header">
            <p className="card-header-title">
              <a href="#" class="card-header-icon" aria-label="more options">
              <form>
                <input type="text" className="input" placeholder={this.props.NoteTitle} />
              </form>
              </a>
            </p>
          </header>

        <div className="card-content">
          <div className="content">
          <form>
            <input type="text" className="input" placeholder={this.props.NoteContent} />
          </form>
            <br />
            <hr />
            <br />
            <time dateTime={this.props.NoteTimeStamp}>{this.props.NoteTimeStamp}</time>
          </div>
        </div>
        </div>

        <div className="card">
          <header className="card-header">
            <p className="card-header-title">
              <a href="#" class="card-header-icon" aria-label="more options" onClick={this.showModal} >
              {this.props.NoteTitle}
              </a>
            </p>
          </header>

        <div className="card-content">
          <div className="content">
            {this.props.NoteContent}
            <br />
            <hr />
            <br />
            <time dateTime={this.props.NoteTimeStamp}>{this.props.NoteTimeStamp}</time>
          </div>
        </div>
        </div>
        </section>
        <footer className="modal-card-foot">
        <button className="button is-success" onClick={this.editModal}>Save changes</button>
        <button className="button" onClick={this.closeModal}>Cancel</button>
        </footer>
      </div>
      </div>
    </div>
  )
  }
}
