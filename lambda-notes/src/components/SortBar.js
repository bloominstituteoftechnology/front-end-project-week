import React from 'react';

const SortBar = props => {
  return(
    <div className='sort-bar'>
      <div className='button sort-title' onClick={props.sortByTitleAsc}>
      Sort By Title A-Z
      </div>
      <div className='button sort-title' onClick={props.sortByTitleDes}>
      Sort By Title <br /> Z-A
      </div>
      <div className='button sort-length' onClick={props.sortByLength}>
      Sort By Length (ascending)
      </div>
    </div>
  )
}

export default SortBar;
