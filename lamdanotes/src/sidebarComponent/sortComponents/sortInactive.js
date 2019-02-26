import React from 'react';

// props from sortView.js
// handleToggle={this.handleToggle}

const SortInactive = props => {
    return(
    <>
        <button 
            className="sbButtons"
            onClick={() => {props.handleToggle()}}    
        >
        <img src="https://img.icons8.com/material/20/FFFFFF/down2.png" alt="sort"/>
            <p>Sort Options</p>
        </button>
    </>
    )
}

export default SortInactive;