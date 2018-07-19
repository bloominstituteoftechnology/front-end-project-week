import React from 'react'
import { Link } from "react-router-dom"
import './SidePanel.css'

const SidePanel = () => {
    let logOutUser = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("password")
        window.location.reload();
    }

    return (
        <div className='side-panel-ctn'>
            <div className='nav-ctn'>
                <div className="" onClick={logOutUser}>Logout</div>
                <h2 className='nav-text'>Lambda Notes</h2>

                <Link to="/" style={{ textDecoration: 'none' }}>
                    <div className='nav-btn'>View Your Notes</div>
                </Link>

                <Link to="/create" style={{ textDecoration: 'none' }}>
                    <div className='nav-btn'>+ Create Your Notes</div>
                </Link>

            </div>
        </div>)
}

export default SidePanel;