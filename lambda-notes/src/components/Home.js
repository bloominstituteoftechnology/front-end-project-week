import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <Link to='/note-list'>Notes</Link>
            <Link to='/note-form'>Add Note</Link>
        </div>
    )
}

export default Home