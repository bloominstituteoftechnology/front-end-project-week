import React from 'react';

const SideBar = props => {
    return (
        <div className="aside">
            <h1>Lambda Notes</h1>
            <button>View Your Notes</button>
            <button><a href="/notes/create"> + Create Your Note</a></button>
        </div>
    )
}

export default SideBar;