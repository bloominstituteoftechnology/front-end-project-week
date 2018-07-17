import React from 'react'
import { Link } from 'react-router-dom'

const SideNav = (props) => {
  return (
    <div className='sideNav'>
      <h1 className='sideNav-header'>
        Lambda <br />
        Notes
      </h1>
      <Link to='/'>
        <div className='btn'>View Your Notes</div>
      </Link>
      <Link to='/notes/new'>
        <div className='btn'>+ Create New Note</div>
      </Link>
    </div>
  )
}
export default SideNav
