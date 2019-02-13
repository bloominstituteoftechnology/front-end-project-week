import React from 'react';

const SideBar = props => {
    return (
        <div className="aside">
            <h1>Lambda Notes</h1>
            <button><a href="/"> View Your Notes</a></button>
            <button><a href="/notes/create"> + Create Your Note</a></button>
        </div>
    )
}

export default SideBar;