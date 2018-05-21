import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/SideNav.css'

const SideNav = props => {
    return (
        <div className="nav flex-column sideNav">
            <div className="row">
            <h1> Lambda Notes </h1>
            </div>
            <div className="row">
            <NavLink to="/"> <button> View Your Notes </button></NavLink>
            </div>
            <div className="row">
            <NavLink to="/create"> <button>+Create New Note </button></NavLink>
            </div>
        </div>
    )
}

export default SideNav