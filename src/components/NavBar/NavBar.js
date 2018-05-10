import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { CSVLink } from 'react-csv'
import './NavBar.css'

class NavBar extends Component {
  render () {
    return (
      <div className='NavBar mb-0'>
        <header className='nav-header'>
          <Link className='nav-link-header' to='/'>
            <h1>Lambda Notes</h1>
          </Link>
        </header>
        <div
          className={`nav-btn  ${!this.props.username ? 'nav-btn-invis' : ''}`}
        >
          Account: {this.props.username}
        </div>
        <Link
          className={`nav-btn ${!this.props.username ? 'nav-btn-invis' : ''}`}
          to='/'
        >
          <div className='m-0 p-0'>View Your Notes</div>
        </Link>
        <Link
          className={`nav-btn ${!this.props.username ? 'nav-btn-invis' : ''}`}
          to='/create'
        >
          <div className='m-0 p-0'>+ Create New Note</div>
        </Link>
        <CSVLink
          data={this.props.notes}
          className={`nav-btn ${!this.props.username ? 'nav-btn-invis' : ''}`}
          filename={`${this.props.username}-lambda-notes.csv`}
        >
          Download Notes
        </CSVLink>
        <Link
          className={`nav-btn logout-btn ${!this.props.username
            ? 'nav-btn-invis'
            : ''}`}
          to={`/`}
          onClick={() => {
            localStorage.clear()
            this.props.clearNotes()
          }}
        >
          Logout
        </Link>
      </div>
    )
  }
}

export default NavBar
