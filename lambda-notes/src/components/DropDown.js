import React from 'react';
import '../App.css';

const DropDown = props => {
  return (
  
    <div class="dropdown">
        <button class="dropbtn">Sort By<span>...</span></button>
        <div class="dropdown-content">
            <p onClick={props.sortedByTitle}>Name</p>
            <p >Most recent</p>
            
        </div>
    </div>
  );
};



export default DropDown;