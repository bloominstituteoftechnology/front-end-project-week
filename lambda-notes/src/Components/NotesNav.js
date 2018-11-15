import React, {Component} from 'react'

import '../App.css'
const NotesNav = (props) => {
    return (
        <nav className='nav'>
            <h1>Lambda Notes</h1>
            <button>View Your Notes</button>
            <button> + Create New Note</button>
        </nav>
    )
}

export default NotesNav