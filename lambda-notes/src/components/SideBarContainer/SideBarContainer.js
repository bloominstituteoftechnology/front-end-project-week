import React from 'react';

const SideBarContainer = () => {
    return (
        <div className='side-bar-container' >

            <h1 className='side-bar-header'>Lambda Notes</h1>
            <button className='side-bar-buttons'>View Your Notes</button>
            <button className='side-bar-buttons'>+ Create New Note</button>

        </div>
    );
}

export default SideBarContainer;