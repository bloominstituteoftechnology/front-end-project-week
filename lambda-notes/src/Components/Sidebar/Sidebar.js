import React from "react";
import './Sidebar.css';
import { Link } from 'react-router-dom';
const Sidebar = () => {
    return (
        <div className = "sidebar-wrapper">
            <header>
                <h1 className = "sidebar-header">Lambda Notes</h1>
            </header>
            <Link to = '/'><button className = "button-view">View Your Notes</button></Link>
            <Link to = '/create'><button onClick={this.createNoteHandler} className = "button-create"> + Create New Note</button></Link>
        </div>
    )
}
 
export default Sidebar;