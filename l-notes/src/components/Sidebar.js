import React from 'react'
import logo from './imgs/logo.jpg'
import { Link } from 'react-router-dom'

const Sidebar = props => {
  return (
    <section className="sidebar">
      <img src={logo} alt='L Notes Logo' />
      <Link to="/"><button>View Your Notes</button></Link>
      <Link to="/add-note"><button>+ Create New Note</button></Link>
    </section>
  )
}

export default Sidebar;
