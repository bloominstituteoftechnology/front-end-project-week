import React from "react";
import { Link } from 'react-router-dom';
import './sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h1>Lambda Notes</h1>
            <Link to="/"><button>View Your Notes</button></Link>
            <Link to="/new-note"><button>+ Create New Note</button></Link>
        </div>
    );
};

export default Sidebar;