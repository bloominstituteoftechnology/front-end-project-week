import React from "react";
import './Sidebar.css';
const Sidebar = () => {
    return (
        <div className = "sidebar-wrapper">
            <header>
                <h1 className = "sidebar-header">Lambda Notes</h1>
            </header>
            <button className = "button-view">View Your Notes</button>
            <button className = "button-create"> + Create New Note</button>
        </div>
    )
}
 
export default Sidebar;