import React from 'react';

const SideBar = () => {
    return(
        <div className='sidebar'>
            <h1>Lambda Notes</h1>
            <button 
                className='button-style'
                onClick= {() =>
                    clickHandler('/notes')}
            >
            View Your Notes
            </button>
            <button 
                className='button-style'
                onClick= {() =>
                    clickHandler('/create')}
            >
            + Create New Note
            </button>
        </div>
    );
}

export default SideBar;
