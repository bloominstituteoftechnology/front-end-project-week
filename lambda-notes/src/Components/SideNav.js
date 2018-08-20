import React from 'react'; 

const SideNav = () => {
    return (
        <div className = "side-nav">
            <h1>Lambda Notes</h1>
            <button className = "view-notes-button">View Your Notes</button>
            <button className = "create-note-button"> + Create New Note</button>
        </div>
    )
}

export default SideNav; 