import React from 'react';

const SortBar = props => {
  return(
    <div className='sort-bar'>
    <div className='button sort-title' onClick={props.sortByTitle}>
    Sort By Title A-Z
    </div>
    <div className='button sort-length'>
    Sort By Length
    </div>
    </div>
  )
}

export default SortBar;
