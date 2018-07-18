import React from 'react'
import { Link } from 'react-router-dom'

const SideNav = (props) => {
  return (
    <div className='sideNav'>
      <Link className='lambda-logo' to='/'>
        <h1 className='sideNav-header'>Lambda </h1>
        <h1 className='sideNav-header'>Notes</h1>
      </Link>
      <Link className='sidenav-button' to='/'>
        View Your Notes
      </Link>
      <Link className='sidenav-button' to='/notes/new'>
        + Create New Note
      </Link>
    </div>
  )
}
export default SideNav
