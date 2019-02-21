import React from 'react'
import {Link} from 'react-router-dom'

import './style.css'

const NavigationPanel = () =>{

    return (
        <div className="navContainer">
            <h1>Lamba</h1>
            <h1>Notes</h1>
            <Link to='/api/notes' style={{textDecoration: 'none'}}>
                <button className="navBtn">View Your Notes</button>
            </Link>
            <Link to='/create' style={{textDecoration: 'none'}}>
                <button className="navBtn">+ Create New Note</button>
            </Link>
        </div>
    )
}

export default NavigationPanel