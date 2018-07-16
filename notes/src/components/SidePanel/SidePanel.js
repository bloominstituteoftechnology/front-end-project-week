import React from 'react'
import { Link } from "react-router-dom"
import './SidePanel.css'

const SidePanel = () => {
    return (
        <div className='side-panel-ctn'>
            <div className='nav-ctn'>

                <h2 className='nav-text'>Lambda Notes</h2>

                <Link to="/notes" style={{ textDecoration: 'none' }}>
                    <div className='nav-btn'>View Your Notes</div>
                </Link>

                <Link to="/create" style={{ textDecoration: 'none' }}>
                    <div className='nav-btn'>+ Create Your Notes</div>
                </Link>
            </div>
        </div>)
}

export default SidePanel;