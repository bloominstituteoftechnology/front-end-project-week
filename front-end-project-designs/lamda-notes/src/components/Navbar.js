import React from "react"
import { NavLink } from "react-router-dom"

import { NavWrapper } from "../styles/navbarStyles"

const Navbar = () => {
  return (
    <NavWrapper>
      <h1>Lambda Notes</h1>
      <NavLink to="/">View Your Notes</NavLink>
      <NavLink to="/">+ Create New Note</NavLink>
    </NavWrapper>
  )
}

export default Navbar
