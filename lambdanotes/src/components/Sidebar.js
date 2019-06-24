import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Sidebar.css';


const Sidebar = () => {
    return (
        <div className="Sidebar">
        <h2>Lambda Notes</h2>
        <Link to='/'><button>View Your Notes</button></Link>
        <Link to='/createNote'><button>+ Create New Note</button></Link>
        </div>
    )
}
export default Sidebar;