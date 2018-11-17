import React from 'react'
import {Link} from 'react-router-dom'

const NavigationPanel = () =>{

    return (
        <div className="navContainer">
            <h1>Lamba Notes</h1>
            <Link to='/'>
                <button>View Your Notes</button>
            </Link>
            <Link to='/create'>
                <button>+Create New Note</button>
            </Link>
        </div>
    )
}

export default NavigationPanel