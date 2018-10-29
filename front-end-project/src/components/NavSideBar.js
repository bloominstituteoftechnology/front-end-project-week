import React from 'react';
import './component.css'
import { Link } from "react-router-dom"


const NavSideBar = () => {

    return (
        <div className="nav-side-bar">
            <div className="nav-content">
                <header className="nav-header">
                    <h1 className="nav-title">
                        Lambda<br></br>Notes
                    </h1>
                </header>
                <div className="view-notes">
                    <div className="view-btn">
                        <Link to="/noteList"><h4 className="note-btn">View Your Notes</h4></Link>
                    </div>
                    <div className="create-btn">
                        <Link to="/addNote"><h4 className="crt-btn">+ Create Your Notes</h4></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavSideBar;