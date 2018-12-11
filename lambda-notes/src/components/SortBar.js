import React from 'react';

const SortBar = props => {
  return(
    <div className='sort-bar'>
      <div className='button sort-title' onClick={props.sortByTitleAsc}>
      Sort By Title <br /> A-Z
      </div>
      <div className='button sort-title' onClick={props.sortByTitleDes}>
      Sort By Title <br /> Z-A
      </div>
      <div className='button sort-length' onClick={props.sortByLengthAsc}>
      Sort By Length <br/>(ascending)
      </div>
      <div className='button sort-length' onClick={props.sortByLengthDes}>
      Sort By Length <br /> (descending)
      </div>
    </div>
  )
}

export default SortBar;
