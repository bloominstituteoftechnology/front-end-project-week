import React from 'react'
import { Link } from 'react-router-dom'
import './Navigation.css'

const Navigation = props => {
    return (
        <div className="navigation">
            <h1 className="nav-title">Lambda Notes</h1>
            <Link className="nav-button" to="/">
                <button>View Your Notes</button>
            </Link>
            <Link className="nav-button" to="/createnew">
                <button>+ Create New Note</button>            
            </Link>
        </div>
    )
}

export default Navigation