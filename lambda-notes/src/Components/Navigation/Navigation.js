import React from 'react'
import { Link } from 'react-router-dom'
import './Navigation.css'

const Navigation = props => {
    return (
        <div className="navigation">
            <h1>Lambda Notes</h1>
            <Link className="button" to="/">
                <button>View Your Notes</button>
            </Link>
            <Link className="button" to="/createnew">
                <button>+ Create New Note</button>            
            </Link>
        </div>
    )
}

export default Navigation