import React from 'react'; 
import { Link } from 'react-router-dom'; 

const SideNav = () => {
    return (
        <div className = "side-nav">
            <h1>Lambda Notes</h1>
            <Link to ="/" className = "view-notes-button">View Your Notes</Link>
            <Link to = "/new" className = "create-note-button"> + Create New Note</Link>
        </div>
    )
}

export default SideNav; 