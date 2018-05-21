import React from 'react'
import { NavLink } from 'react-router-dom'

const SideNav = props => {
    return (
        <nav className="nav flex-column sidebarOfApp">
            <div className="row">
            <h1 className="sidebarHeading col-12 my-3"> Lambda Notes </h1>
            </div>
            <div className="row">
            <NavLink to="/" className="col-12 my-3"> <button className="sidebarButton">View Your Notes </button></NavLink>
            </div>
            <div className="row">
            <NavLink to="/create" className="col-12 my-3"> <button className="sidebarButton">+Create New Note </button></NavLink>
            </div>
        </nav>
    )
}

export default SideNav