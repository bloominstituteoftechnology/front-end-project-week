import React from 'react';

const SideBar = () => {
    return(
        <div className='sidebar'>
            <h1>Lambda Notes</h1>
            <button 
                className='sidebar-button'
                onClick= {() =>
                    clickHandler('/noteView')}
            >
            View Your Notes
            </button>
            <button 
                className='sidebar-button'
                onClick= {() =>
                    clickHandler('/createNewView')}
            >
            + Create New Note
            </button>
        </div>
    );
}

export default SideBar;
