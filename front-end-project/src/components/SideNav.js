import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/SideNav.css'

const SideNav = props => {
    return (
        <div className="nav flex-column sideNav">
            <div className="row no-gutters">
            <h1 className="headingforSideNav"> Lambda Notes </h1>
            </div>
            <div className="row no-gutters buttonStyle">
            <NavLink to="/"> <button> View Your Notes </button></NavLink>
            </div>
            <div className="row no-gutters buttonStyle">
            <NavLink to="/create"> <button className="button2">+Create New Note </button></NavLink>
            </div>
        </div>
    )
}

export default SideNav