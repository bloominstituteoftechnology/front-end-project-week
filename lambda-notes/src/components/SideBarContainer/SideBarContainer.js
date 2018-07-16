import React from 'react';

const SideBarContainer = props => {
    return (
        <div className='side-bar-container' >

            <h1 className='side-bar-header'>Lambda Notes</h1>
            <button onClick={() => props.history.push('/')} className='main-buttons'>View Your Notes</button>
            <button onClick={() => props.history.push('/create')} className='main-buttons'>+ Create New Note</button>

        </div>
    );
}

export default SideBarContainer;