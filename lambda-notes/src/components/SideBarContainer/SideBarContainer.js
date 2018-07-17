import React from 'react';

const SideBarContainer = props => {
    return (
        <div className='side-bar-nav'>
            <div className='side-bar-container'>
                <div className='side-bar-content'>
                    <h1 className='side-bar-header'>Lambda Notes</h1>
                    <button onClick={() => props.history.push('/notes')} className='main-buttons'>View Your Notes</button>
                    <button onClick={() => props.history.push('/create')} className='main-buttons'>+ Create New Note</button>
                </div>
            </div>
        </div>
    );
}

export default SideBarContainer;