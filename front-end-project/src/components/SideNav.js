import React from 'react'
import { NavLink } from 'react-router-dom'

const SideNav = props => {
    return (
        <div>
            <NavLink to="/"> View Your Notes </NavLink>
            <NavLink to="/create"> +Create New Note </NavLink>
        </div>
    )
}

export default SideNav