import React from 'react'
import { Link } from 'react-router-dom'

export const SideMenu = () => (
  <div className="SideMenu">
    <h1>Lambda Notes</h1>
    <div className="SideMenu_buttons">
      <button><Link to="/">View Your Notes</Link></button>
      <button><Link to="/create/">+ Create New Note</Link></button>
    </div>
  </div>
)
