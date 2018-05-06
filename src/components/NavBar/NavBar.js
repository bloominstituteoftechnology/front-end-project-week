import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { CSVLink } from 'react-csv'
import './NavBar.css'

class NavBar extends Component {
  render() {
    return (
      <div className='NavBar'>
        <header className='nav-header'>
          <Link className='nav-link-header' to='/'>
            <h1>Lambda Notes</h1>
          </Link>
        </header>
        <Link className={`nav-btn ${!this.props.username ? 'nav-btn-invis' : ''}`} to='/'>
          <div>View Your Notes</div>
        </Link>
        <Link className={`nav-btn ${!this.props.username ? 'nav-btn-invis' : ''}`} to='/create'>
          <div>+ Create New Note</div>
        </Link>
        <CSVLink data={this.props.notes} className={`nav-btn ${!this.props.username ? 'nav-btn-invis' : ''}`}>
          Download Notes
        </CSVLink>
      </div>
    )
  }
}

export default NavBar
