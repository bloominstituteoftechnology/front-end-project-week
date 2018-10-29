import React from 'react';

const NavBar = props => {
    return (
        <div className='navBar-container'>
            <h1>Lambda Notes</h1>
            <button>View your Notes</button>
            <button>+ Create New Note</button>
        </div>
    )
}

export default NavBar;