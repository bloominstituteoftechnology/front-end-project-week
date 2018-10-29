import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = props => {
    return (
        <div className="navigation">
            <h1>Lambda Notes</h1>
            <Link to="/">
                <button>View Your Notes</button>
            </Link>
            <Link to="/createnew">
                <button>+ Create New Note</button>            
            </Link>
        </div>
    )
}

export default Navigation