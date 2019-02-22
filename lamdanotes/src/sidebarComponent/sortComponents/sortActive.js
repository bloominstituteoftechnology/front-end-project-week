import React from 'react';

//props from sortView.js
//handleAscendingSort={this.props.handleAscendingSort}
//handleDescendingSort={this.props.handleDescendingSort}

const SortActive = props => {
    return(
    <>
        <button 
            className="sbButtons"
            onClick={() => {props.handleToggle()}}    
        >
            Sort Options &#10548;
        </button>
        <br />
            <div className="alphaContainer">
                <img 
                    src="https://img.icons8.com/material/20/000000/alphabetical-sorting.png" 
                    alt="sorting a-z" 
                    className="alphaSortButtons firstSort"
                    onClick={() => {props.handleAscendingSort()}}
                />

                <img 
                    src="https://img.icons8.com/material/20/000000/alphabetical-sorting-2.png" 
                    alt="sorting z-a" 
                    className="alphaSortButtons"
                    onClick={() => {props.handleDescendingSort()}}
                />
            </div>
        
    </>
    )
}

export default SortActive;