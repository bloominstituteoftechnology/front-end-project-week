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
            Sort Options &#8628;
        </button>
    </>
    )
}

export default SortInactive;