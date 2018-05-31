import React from 'react'
import LinkButton from './buttons/LinkButton'

const Sidebar = () => (
  <div className="sidebar-container">
    <h1>Lambda Notes</h1>
    <LinkButton
      to='/'
      text='View Your Notes' />
    <LinkButton
      to='/create'
      text='+ Create New Note' />
  </div>
)

export default Sidebar