import React from 'react'
import { Link } from 'react-router-dom'

export const SideMenu = () => (
  <div className='SideMenu'>
    <h1>Lambda Notes</h1>
    <div className='SideMenu_buttons'>
      <Link className='button' to='/'>View Your Notes</Link>
      <Link className='button' to='/create/'>+ Create New Note</Link>
    </div>
  </div>
)
